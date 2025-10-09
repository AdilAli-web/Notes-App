import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

function ViewPaste() {
  const { id } = useParams();
  const allpastes = useSelector((state) => state.paste.Pastes)
  const paste = allpastes.find((p) => p._id === id);

  if (!paste) {
    return <div className="container mx-auto px-4 py-8 text-center text-gray-500">Paste not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <input 
          className='w-full p-3 mb-4 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none' 
          type="text" 
          value={paste.title} 
          disabled 
        />
        <textarea 
          className='w-full p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none' 
          value={paste.content} 
          rows={12} 
          disabled 
        />
      </div>
    </div>
  )
}

export default ViewPaste