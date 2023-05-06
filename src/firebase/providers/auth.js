import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../'

export const registerUser = async ({ email, password }) => {
   try {
      const credentials = await createUserWithEmailAndPassword(auth, email, password)
      return { ok: true }
   } catch (error) {
      const errorMessage = error.message
      return { ok: false, errorMessage }
   }
}

export const loginUser = async ({ email, password }) => {
   try {
      const credentials = await signInWithEmailAndPassword(auth, email, password)
      return { ok: true }
   } catch (error) {
      const errorMessage = error.message
      return { ok: false, errorMessage }
   }
}

export const logoutFirebase = async () => {
   return await signOut(auth)
}
