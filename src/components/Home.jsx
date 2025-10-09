import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToPaste, updateToPaste } from '../redux/PasteSlice';
// import { addToPaste } from '../path/to/your/actions'; // Update the path as needed

function Home() {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [Search, setSearch] = useSearchParams();
  const pasteId = Search.get("pasteId");
  console.log(pasteId);
  const allpastes = useSelector(state => state.paste.Pastes)
  useEffect(() => {
    if (pasteId) {
      const existingPaste = allpastes.find(p => p._id === pasteId);
      if (existingPaste) {
        setTitle(existingPaste.title);
        setValue(existingPaste.content);
      }
    } else {
      setTitle("");
      setValue("");
    }
  }, [pasteId, allpastes]);

  const dispatch = useDispatch();
  function CreatePaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36)
      ,
      CreateAt: new Date().toISOString()

    }

    if (pasteId) {
      // update paste
      dispatch(updateToPaste(paste))
    } else {
      dispatch(addToPaste(paste))
    }
    setTitle("");
    setValue("");
    setSearch({});
  }

  return (
    <div>
      <input className='m-2' type="text" value={title} placeholder='create paste' onChange={(e) => setTitle(e.target.value)} />
      <button onClick={CreatePaste} >
        {pasteId ? 'Update' : 'Create paste'}
      </button>
      <textarea className='rounded-2xl mt-4 min-w-[500px] p-4 bg-rose-100' placeholder='Enter your Content' value={value} onChange={(e) => setValue(e.target.value)} rows={10} />


    </div>
  )
}

export default Home