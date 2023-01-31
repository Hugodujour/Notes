import { MdDeleteForever } from 'react-icons/md'
import NotesList from './NotesList'

const Note = ({id, text, date}) => {
  return (
    <div className="note">

      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever className='delete-icon' size='1.3rem' />
      </div>

    </div>
  )
}

export default Note