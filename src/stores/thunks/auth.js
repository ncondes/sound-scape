import { loginUser, logoutFirebase, registerUser } from '../../firebase/providers/auth'
import { checkingCredentials, login, logout, register, setMessage } from '../slices/auth'

export const chekingAuthentication = () => {
   return async (dispatch) => {
      dispatch(checkingCredentials())
   }
}

export const startLogin = ({ email, password }) => {
   return async (dispatch) => {
      dispatch(checkingCredentials())

      const data = await loginUser({ email, password })
      if (!data.ok) {
         dispatch(setMessage(data.errorMessage))
         dispatch(logout())
         return
      }

      dispatch(login())
   }
}

export const startCreatingUser = ({ email, password }) => {
   return async (dispatch) => {
      dispatch(checkingCredentials())

      const data = await registerUser({ email, password })
      if (!data.ok) {
         dispatch(setMessage(data.errorMessage))
         dispatch(logout())
         return
      }

      dispatch(register())
   }
}

export const startLogout = () => {
   return async (dispatch) => {
      await logoutFirebase()
      dispatch(logout())
   }
}
