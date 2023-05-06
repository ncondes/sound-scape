import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectAuthMessage } from '../stores/selectors/auth'

const dictionary = {
   'Firebase: Error (auth/user-not-found).': {
      message: 'Email not found.',
      variant: 'error'
   },
   'Firebase: Error (auth/wrong-password).': {
      message: 'Invalid login credentials.',
      variant: 'error'
   },
   'Login successful': {
      message: 'Login successful!',
      variant: 'success'
   },
   'Firebase: Error (auth/email-already-in-use).': {
      message: 'Email already in use.',
      variant: 'error'
   },
   'Register successful': {
      message: 'Register successful!',
      variant: 'success'
   },
   'Checking...': {
      message: 'Checking...',
      variant: 'info'
   }
}

export const useAlertMessage = () => {
   const [message, setMessage] = useState('')
   const [variant, setVariant] = useState('')
   const [showAlert, setShowAlert] = useState(false)

   const authMessage = useSelector(selectAuthMessage)

   const handleAlertMessage = (key) => {
      if (!key) return

      setMessage(dictionary[key]?.message ?? 'An unexpected error ocurred. Please try again later.')
      setVariant(dictionary[key]?.variant ?? 'error')
   }

   const displayAlert = () => {
      setShowAlert(true)
      // add a delay of 3 seconds
      setTimeout(() => {
         setShowAlert(false)
      }, 3000)
   }

   const clearAlertMessage = () => {
      setMessage('')
      setVariant('')
      setShowAlert(false)
   }

   // handle the alert message on firebase message changes
   useEffect(() => {
      handleAlertMessage(authMessage)
   }, [authMessage])

   // clear custom hook on unmount
   useEffect(() => {
      return clearAlertMessage
   }, [])

   return {
      showAlert,
      message,
      variant,
      displayAlert
   }
}
