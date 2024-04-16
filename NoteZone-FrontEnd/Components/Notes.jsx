import React , {useContext, useEffect} from 'react';
import NotesContext from '../context/NotesContext';
import Notesitem from './Notesitem';
import AddNote from "./Addnotes.jsx";

const Notes = () => {
    const context = useContext(NotesContext);
    const { notes, add, getNotes, editNote, deleteNote } = context;

    useEffect(() => {
        getNotes();
    }, []);

    const modalRef = useRef(null);
    const [showModal, setShowModal] = useState(false);
    const [note, setNote] = useState({ id:"", title: "", description: "", tag: "" }); // State for form inputs

    const updateNote = (currentNote) => {
        setShowModal(true);
        setNote({
            id:currentNote._id,
            title: currentNote.title,
            description: currentNote.description,
            tag: currentNote.tag
        });
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const refClose= useRef(null)

    const handleSubmit = (event) => {
        console.log("Updating the Note", note)
        editNote(note.id, note.title, note.description, note.tag )
        refClose.current.click()
        // event.preventDefault(); // Prevent default form submission behavior
        // add(note.title, note.description, note.tag);
        // setNote({ title: "", description: "", tag: "" }); // Clear input fields after submission
        // setShowModal(false); // Close the modal after saving changes
    };

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

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
