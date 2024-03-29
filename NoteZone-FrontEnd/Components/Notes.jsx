import React , {useContext} from 'react';
import NotesContext from '../context/NotesContext';
import Notesitem from './Notesitem';

const Notes = () => {

  const context = useContext(NotesContext);
  const {notes, setNotes} =context;

  return (
    <div className="row my-3">
      <h3>Your Notes</h3>
      {notes.map((notes)=>{
        return <Notesitem note= {notes}/>
      })}
      </div>
  )
}

export default Notes
