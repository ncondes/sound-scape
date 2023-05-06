import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Login } from './Login'
import { Register } from './Register'
import { closeModal } from '../../stores/slices/modal'

export const AuthModal = () => {
   const dispatch = useDispatch()

   const { isOpen } = useSelector((state) => state.modal)

   const [tab, setTab] = useState('login')

   const handleClose = () => {
      dispatch(closeModal())
   }

   if (!isOpen) return

   return (
      <div className="fixed z-10 inset-0 overflow-y-auto" id="modal">
         <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
               <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
            </div>
            {/*  this element is to trick the browser into centering the modal contents */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
               {/* add margin if you want to see some of the overlay behind the modal */}
               <div className="py-4 text-left px-6">
                  {/* title */}
                  <div className="flex justify-between items-center pb-4">
                     <p className="text-2xl font-bold">Your Account</p>
                     {/* modal close button */}
                     <div className="modal-close cursor-pointer z-50" onClick={handleClose}>
                        <i className="fas fa-times"></i>
                     </div>
                  </div>

                  {/* <!-- tabs --> */}
                  <ul className="flex flex-wrap mb-4">
                     <li className="flex-auto text-center">
                        <a
                           className={`block rounded py-3 px-4 transition
                              ${tab === 'login' ? 'hover:text-white text-white bg-blue-600' : ''}
                              ${tab === 'register' ? 'hover:text-blue-600' : ''}`}
                           href="#"
                           onClick={() => setTab('login')}
                        >
                           Login
                        </a>
                     </li>
                     <li className="flex-auto text-center">
                        <a
                           className={`block rounded py-3 px-4 transition
                              ${tab === 'register' ? 'hover:text-white text-white bg-blue-600' : ''}
                              ${tab === 'login' ? 'hover:text-blue-600' : ''}`}
                           href="#"
                           onClick={() => setTab('register')}
                        >
                           Register
                        </a>
                     </li>
                  </ul>

                  {tab === 'login' && <Login />}
                  {tab === 'register' && <Register />}
               </div>
            </div>
         </div>
      </div>
   )
}
