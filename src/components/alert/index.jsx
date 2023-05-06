const variants = {
   success: 'bg-green-500',
   error: 'bg-red-500',
   info: 'bg-blue-500'
}

export const Alert = ({ message, variant }) => {
   return (
      <div
         className={`block w-full text-white ${
            variants[variant] ?? ''
         } text-center font-semibold p-4 mb-3`}
      >
         {message}
      </div>
   )
}
