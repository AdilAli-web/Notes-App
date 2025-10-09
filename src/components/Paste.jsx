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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto mb-8 relative">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Search Paste by title'
          className='w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 ease-in-out transform focus:scale-[1.01]'
        />
        <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </div>
      <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-10">Your Pastes</h2>
      <div className="max-w-5xl mx-auto">
        {filterPaste.length === 0 ? (
          <p className="text-center text-gray-600 text-xl">No pastes found. Create one from the Home page!</p>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filterPaste.map((paste) => (
          <div className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden transform hover:-translate-y-1' key={paste._id}>
            <div className="p-6">
              <h1 className='text-2xl font-bold text-gray-800 mb-2'>{paste.title}</h1>
              <p className="text-gray-600 truncate">{paste.content}</p>
            </div>
            <div className='px-6 pb-4 flex flex-wrap gap-2'>
              <button onClick={() => remove(paste._id)} className='bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white font-medium transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2'>Delete</button>
              <Link to={`/?pasteId=${paste._id}`} className='bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-medium transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
                Edit
              </Link>
              <Link to={`/Pastes/${paste._id}`} className='bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-white font-medium transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'>
                View
              </Link>
              <button onClick={() => {
                navigator.clipboard.writeText(paste.content)
                toast.success("Copied to clipboard", { position: "top-center", autoClose: 1000 })
              }} className='bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg text-white font-medium transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'>
                Copy
              </button>
              <button onClick={() => {
                navigator.share({
                  title: paste.title,
                  text: paste.content,
                })
              }} className='bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-white font-medium transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2'>
                Share
              </button>
            </div>
          </div>
        ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Paste