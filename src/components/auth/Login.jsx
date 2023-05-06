import { useForm } from 'react-hook-form'
import { InputField } from './InputField'
import { useDispatch, useSelector } from 'react-redux'
import { startLogin } from '../../stores/thunks/auth'
import { Alert } from '../alert'
import { useMemo } from 'react'
import { useAlertMessage } from '../../hooks'

const schema = {
   email: {
      required: 'Email is required',
      pattern: {
         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
         message: 'Invalid email address'
      }
   },
   password: {
      required: 'Password is required',
      minLength: {
         value: 6,
         message: 'Password must be at least 6 characters'
      },
      maxLength: {
         value: 30,
         message: 'Password cannot be more than 30 characters'
      }
   }
}

export const Login = () => {
   const { control, handleSubmit } = useForm()
   const dispatch = useDispatch()
   const { status } = useSelector((state) => state.auth)
   const { message, variant, showAlert, displayAlert } = useAlertMessage()
   const isAuthenticating = useMemo(() => status === 'checking', [status])

   const onSubmit = (data) => {
      dispatch(startLogin(data))
      displayAlert()
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div className="flex flex-col my-1">
            {showAlert ? <Alert message={message} variant={variant} /> : null}
            <InputField
               label="Email"
               name="email"
               type="email"
               placeholder="Enter Email"
               rules={schema.email}
               control={control}
            />
            {/* password */}
            <InputField
               label="Password"
               name="password"
               type="password"
               placeholder="Password"
               rules={schema.password}
               control={control}
            />
         </div>
         <div className="mt-2 text-center">
            <button
               className={`block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700 cursor-pointer ${
                  isAuthenticating ? 'opacity-50 cursor-not-allowed' : ''
               }`}
               type="submit"
               disabled={isAuthenticating}
            >
               Submit
            </button>
         </div>
      </form>
   )
}
