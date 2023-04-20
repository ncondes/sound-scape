import { faComments, faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const SongItem = () => {
  return (
     <li className="text-gray-600 container mx-auto flex justify-between items-center pt-4 pb-2 pl-6 pr-4 hover:bg-gray-100 cursor-pointer">
        <div>
           <h1 className="font-bold text-lg"> Song Title </h1>
           <h4> Artist Name </h4>
        </div>
        <div>
           <FontAwesomeIcon icon={faHeart} size="lg" />
           <span className="font-medium text-lg ml-1 mr-4"> 10 </span>
           <FontAwesomeIcon icon={faComments} size="lg" />
           <span className="font-medium text-lg ml-1"> 5 </span>
        </div>
     </li>
  )
}
