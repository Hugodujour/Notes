import { MdDeleteForever } from 'react-icons/md'

const Note = () => {
  return (
    <div className="note">
      <span>Hello !</span>
      <div className="note-footer">
        <small>10/10/10</small>
        <MdDeleteForever className='delete-icon' size='1.3rem' />
      </div>



    </div>
  )
}

export default Note