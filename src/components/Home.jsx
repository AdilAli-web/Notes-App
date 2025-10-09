import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToPaste, updateToPaste } from '../redux/PasteSlice';

function Home() {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [Search, setSearch] = useSearchParams();
  const pasteId = Search.get("pasteId");
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
      _id: pasteId || Date.now().toString(36),
      CreateAt: new Date().toISOString()
    }

    if (pasteId) {
      dispatch(updateToPaste(paste))

    } else {
      dispatch(addToPaste(paste))
    }
    setTitle("");
    setValue("");
    setSearch({});
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <input
          className='w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          type="text"
          value={title}
          placeholder='Create a new paste'
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className='w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          placeholder='Enter your content'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={10}
        />
        <button
          onClick={CreatePaste}
          className='w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          {pasteId ? 'Update Paste' : 'Create Paste'}
        </button>
      </div>
    </div>
  )
}

export default Home