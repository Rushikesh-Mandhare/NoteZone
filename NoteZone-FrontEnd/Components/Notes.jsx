import React , {useContext, useEffect} from 'react';
import NotesContext from '../context/NotesContext';
import Notesitem from './Notesitem';
import AddNote from "./Addnotes.jsx";

const Notes = () => {

  const context = useContext(NotesContext);
  const {notes, add, getNotes} =context;
  
  useEffect(() => {
    
      getNotes()
    
  }, [])
  

  return (
    <>
    <div>
        <AddNote/>
      </div>
    
    <div className="row my-3">
      <h3>Your Notes</h3>
      {notes.map((notes)=>{
        return <Notesitem key={notes._id} note= {notes}/>
      })}
      </div>
      </>
  )
}

export default Notes
