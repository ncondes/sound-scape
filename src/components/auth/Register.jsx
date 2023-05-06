import { useForm } from 'react-hook-form'
import { InputField } from './InputField'
import { useDispatch, useSelector } from 'react-redux'
import { Alert } from '../alert'
import { useMemo } from 'react'
import { startCreatingUser } from '../../stores/thunks/auth'
import { useAlertMessage } from '../../hooks'

const schema = {
   name: {
      required: 'Name is required',
      maxLength: { value: 20, message: 'Name cannot exceed 20 characters' },
      minLength: { value: 2, message: 'Name must be at least 2 characters' }
   },
   email: {
      required: 'Email is required',
      pattern: {
         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
         message: 'Invalid email address'
      }
   },
   age: {
      required: 'Age is required',
      min: { value: 18, message: 'You must be at least 18 years old' },
      max: { value: 85, message: 'You cannot be older than 85 years old' }
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
      },
      validate: validatePassword
   },
   confirm_password: {
      required: 'Confirm Password is required',
      minLength: {
         value: 6,
         message: 'Confirm Password must be at least 6 characters'
      },
      maxLength: {
         value: 30,
         message: 'Confirm Password cannot be more than 30 characters'
      },
      validate: { value: validateConfirmPassword }
   },
   country: {
      required: 'Country is required',
      validate: validateCountry
   },
   tos: {
      required: 'You must accept the Terms of Service'
   }
}

export const Register = () => {
   const {
      register,
      control,
      handleSubmit,
      formState: { errors }
   } = useForm()
   const dispatch = useDispatch()
   const { status } = useSelector((state) => state.auth)
   const { message, variant, showAlert, displayAlert } = useAlertMessage()
   const isAuthenticating = useMemo(() => status === 'checking', [status])

   const onSubmit = (data) => {
      dispatch(startCreatingUser(data))
      displayAlert()
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div className="flex flex-col my-1">
            {showAlert ? <Alert message={message} variant={variant} /> : null}
            {/* name */}
            <InputField
               label="Name"
               name="name"
               type="text"
               placeholder="Enter Name"
               rules={schema.name}
               control={control}
            />
            {/* email */}
            <InputField
               label="Email"
               name="email"
               type="email"
               placeholder="Enter Email"
               rules={schema.email}
               control={control}
            />
            {/* age */}
            <InputField label="Age" name="age" type="number" rules={schema.age} control={control} />
            {/* password */}
            <InputField
               label="Password"
               name="password"
               type="password"
               rules={schema.password}
               control={control}
            />
            {/* confirm password */}
            <InputField
               label="Confirm Password"
               name="confirm-password"
               type="password"
               rules={schema.confirm_password}
               control={control}
            />
            {/* country */}
            <div className="mb-3">
               <label className="inline-block mb-2">Country</label>
               <select
                  {...register('country', schema.country)}
                  className="block w-full border border-gray-300 text-gray-800 py-1.5 px-3 transition duration-500 focus:outline-none focus:border-black rounded"
               >
                  <option value="USA">USA</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Russia">Russia</option>
                  <option value="Argentina">Argentina</option>
               </select>
               {errors.country && <p className="text-red-600">{errors.country.message}</p>}
            </div>
            {/* terms */}
            <div className="mb-3 flex items-center">
               <input
                  className="rounded border border-gray-500 focus:ring-transparent"
                  type="checkbox"
                  {...register('tos', schema.tos)}
               />
               <label className="inline-block ml-2">I accept Music's Terms of Service</label>
            </div>
            {errors.tos && <p className="text-red-600">{errors.tos.message}</p>}
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

function validatePassword(value) {
   if (value === 'password') return "Password cannot be 'password'"
}

function validateConfirmPassword(value, values) {
   if (value !== values.password) return 'Passwords do not match'
}

function validateCountry(value) {
   if (value === 'Argentina') return 'We currently do not support Argentina'
}
