import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '@/store/auth-modal/authModal.slice'
import { startLogout } from '@/store/auth/auth.thunk'
import { selectIsUserLoggedIn } from '@/store/auth/auth.selectors'

export const Header = () => {
  const dispatch = useDispatch()
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn)

  const handleLoginRegister = () => {
    dispatch(openModal())
  }

  const handleLogOut = () => {
    dispatch(startLogout())
  }

  return (
    <header className="sticky top-0 z-10 bg-gray-700">
      <nav className="container mx-auto flex justify-between items-center py-5 px-4">
        {/* app name */}
        <a href="/">
          <p className="text-white font-bold text-2xl">
            SOUND <span className="font-normal text-xl text-amber-500">Scape</span>
          </p>
        </a>
        <div className="flex items-center">
          <ul className="flex flex-row mt-1">
            {isUserLoggedIn ? (
              <>
                {/* navigation links */}
                <li>
                  <a href="/manage" className="navbar-link px-3 text-white font-semibold">
                    <i className="fa-solid fa-sliders mx-1 " />
                    Manage
                  </a>
                </li>
                <li>
                  <a className="cursor-pointer navbar-link px-3 text-white font-semibold" onClick={handleLogOut}>
                    <i className="fa-solid fa-right-from-bracket mx-1 " />
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <li>
                <a className="cursor-pointer navbar-link px-3 text-white font-semibold" onClick={handleLoginRegister}>
                  <i className="fa-solid fa-right-to-bracket mx-1 " />
                  Login / Register
                </a>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  )
}
