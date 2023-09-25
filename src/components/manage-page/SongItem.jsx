export const SongItem = ({ song }) => {
  const artists = song.artist.join(', ') ?? ''

  return (
    <tr className="h-10">
      {/* title */}
      <td>{song.title ?? ''}</td>
      {/* artist */}
      <td>
        <div className="flex justify-start items-center gap-2 max-w-[128px]">
          <i className="fa-solid fa-user-group fa-sm"></i>
          <p className="w-full truncate ...">{artists}</p>
        </div>
      </td>
      {/* genre */}
      <td>{song.genre ?? ''}</td>
      {/* favorites */}
      <td className="flex justify-center">
        <div className="flex justify-start items-center gap-2 w-10">
          <i className="fa-solid fa-star fa-sm"></i>
          <span>{song.favorites ?? 0}</span>
        </div>
      </td>
      {/* details */}
      <td className="text-center">
        <a
          href={`/manage/${song.id}`}
          className="inline-block w-8 h-8 rounded-full hover:bg-neutral-500 hover:bg-opacity-30"
        >
          {/* // TODO: maybe use another color to highligh the action */}
          <i className="fa-solid fa-pen mt-2"></i>
        </a>
      </td>
    </tr>
  )
}
