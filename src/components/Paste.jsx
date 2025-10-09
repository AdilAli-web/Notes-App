import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removePaste, } from '../redux/PasteSlice'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function Paste() {
  const Pastes = useSelector(state => state.paste.Pastes)
  const [search, setSearch] = useState('');
  const dispatch = useDispatch()
  const filterPaste = Pastes.filter(paste => paste.title.toLowerCase()
    .includes(search.toLowerCase())

  )
  let navigate = useNavigate()
  function remove(id) {
    dispatch(removePaste(id))
    navigate('/')
  }


  return (
    <div>


      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search Paste by title' className='p-2 rounded-2xl- min-w-[600px] mt-5' />
      <div className='flex flex-col gap-5 mt-5'>

        {filterPaste.map((paste) => (
          <div className='border' key={paste._id}>
            <div>
              <h1 className='text-2xl font-bold'>{paste.title}</h1>

            </div>
            <div>
              <p>{paste.content}</p>

            </div>
            <hr />
            <div className='flex flex-row gap-4 place-content-evenly'>
              <button onClick={() => remove(paste._id)} className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 mb-4'>Delete</button>

              <button className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 mb-4'>
                <Link to={`/?pasteId=${paste._id}`}>
                  Edit
                </Link>


              </button>

              <button onClick={() => remove(paste._id)} className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 mb-4'>View</button>

              <button onClick={() => {
                navigator.clipboard.writeText(paste.content)
                toast.success("Copied to clipboard", { position: "top-center", autoClose: 1000 })
              }} className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 mb-4'>Copy


              </button>

              <button onClick={() => {
                navigator.share({
                  title: paste.title,
                  text: paste.content,
                })
              }} className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 mb-4'>Share</button>


            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Paste