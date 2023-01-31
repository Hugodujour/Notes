import { useState, useEffect } from "react"
import { nanoid } from 'nanoid'
import NotesList from "./components/NotesList"

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "This is my first note !",
      date: "15/15/15",
    },
    {
      id: 2,
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

  useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('notes-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'notes-data',
			JSON.stringify(notes)
		);
	}, [notes]);

  const addNote = (text) => {
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=> note.id !== id)
    setNotes(newNotes)
  }

  return (
    <div className="container">
      <NotesList notes={notes.filter((note)=> note.text)}
      handleAddNote={addNote}
      handleDeleteNote={deleteNote}
      />
    </div>
  )
}

export default App