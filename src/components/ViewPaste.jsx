import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

function ViewPaste() {
  const { id } = useParams();
  const allpastes = useSelector((state) => state.paste.Pastes)
  const paste = allpastes.find((p) => p._id === id);

  if (!paste) {
    return <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <p className="text-center text-gray-600 text-2xl font-semibold">Paste not found.</p>
    </div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8 space-y-6">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">View Paste</h2>
        <input 
          className='w-full p-3 mb-4 border border-gray-200 rounded-lg bg-gray-50 text-gray-800 font-semibold focus:outline-none' 
          type="text" 
          value={paste.title} 
          disabled 
        />
        <textarea 
          className='w-full p-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-800 font-mono resize-none overflow-auto focus:outline-none' 
          value={paste.content} 
          rows={12} 
          disabled 
        />
      </div>
    </div>
  )
}

export default ViewPaste