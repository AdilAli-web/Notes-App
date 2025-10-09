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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 space-y-6">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
          {pasteId ? 'Update Your Paste' : 'Create a New Paste'}
        </h2>
        <input
                    className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 ease-in-out transform focus:scale-[1.01]'
          type="text"
          value={title}
          placeholder='Create a new paste'
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
                    className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 ease-in-out transform focus:scale-[1.01]'
          placeholder='Enter your content'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={10}
        />
        <button
          onClick={CreatePaste}
                    className='w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:-translate-y-1 active:scale-95'
        >
          {pasteId ? 'Update Paste' : 'Create Paste'}
        </button>
      </div>
    </div>
  )
}

export default Home