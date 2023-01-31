import { useState } from "react"
import { nanoid } from 'nanoid'
import NotesList from "./components/NotesList"

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note !",
      date: "15/15/15",
    },
    {
      id: nanoid(),
      text: "This is my 2 note !",
      date: "15/15/15",
    },
    {
      id: nanoid(),
      text: "This is my 3 note !",
      date: "15/15/15",
    },
    {
      id: nanoid(),
      text: "This is my new note !",
      date: "15/15/15",
    },
    
  ])

  return (
    <div className="container">
      <NotesList notes={notes}/>
    </div>
  )
}

export default App