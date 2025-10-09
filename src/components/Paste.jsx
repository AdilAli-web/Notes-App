import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removePaste, } from '../redux/PasteSlice'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Paste() {
  const Pastes = useSelector(state => state.paste.Pastes)
  const [search, setSearch] = useState('');
  const dispatch = useDispatch()

  const filterPaste = Pastes.filter(paste => 
    paste.title.toLowerCase().includes(search.toLowerCase())
  )

  function remove(id) {
    dispatch(removePaste(id))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <input 
        type="text" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        placeholder='Search Paste by title' 
        className='w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' 
      />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filterPaste.map((paste) => (
          <div className='bg-white rounded-lg shadow-md overflow-hidden' key={paste._id}>
            <div className="p-6">
              <h1 className='text-2xl font-bold text-gray-800 mb-2'>{paste.title}</h1>
              <p className="text-gray-600 truncate">{paste.content}</p>
            </div>
            <div className='px-6 pb-4 flex flex-wrap gap-2'>
              <button onClick={() => remove(paste._id)} className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300'>Delete</button>
              <Link to={`/?pasteId=${paste._id}`} className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300'>
                Edit
              </Link>
              <Link to={`/Pastes/${paste._id}`} className='bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300'>
                View
              </Link>
              <button onClick={() => {
                navigator.clipboard.writeText(paste.content)
                toast.success("Copied to clipboard", { position: "top-center", autoClose: 1000 })
              }} className='bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-300'>
                Copy
              </button>
              <button onClick={() => {
                navigator.share({
                  title: paste.title,
                  text: paste.content,
                })
              }} className='bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors duration-300'>
                Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Paste