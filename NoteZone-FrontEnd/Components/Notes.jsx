import React, { useContext, useEffect, useRef, useState } from 'react';
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
        event.preventDefault(); // Prevent default form submission behavior
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
                <AddNote />
            </div>

            <div>
                <button type="button" className="btn btn-primary d-none" onClick={updateNote} ref={modalRef}>
                    Launch demo modal
                </button>
                <div className={`modal fade ${showModal ? 'show' : ''}`} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden={!showModal} style={{ display: showModal ? 'block' : 'none' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            </div>
                            <div className="modal-body">
                                <form className="my-4" onSubmit={handleSubmit}>
                                    <div className="form-group mb-3">
                                        <label htmlFor="title"><h4>Title</h4></label>
                                        <input type="text" className="form-control" id="title" name="title" placeholder="Enter Title" value={note.title} onChange={onChange} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="description"><h4>Description</h4></label>
                                        <input type="text" className="form-control" id="description" name="description" placeholder="Description" value={note.description} onChange={onChange} />
                                    </div>

                                    <div className="form-group mb-3">
                                        <label htmlFor="tag"><h4>Tag</h4></label>
                                        <input type="text" className="form-control" id="tag" name="tag" placeholder="Tag" value={note.tag} onChange={onChange} />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                                        <button type="submit" className="btn btn-primary" ref={refClose} >Save changes</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-3">
                <h3>Your Notes</h3>
                {notes.map((note) => {
                    return <Notesitem key={note._id} openModal={updateNote} deleteNote={deleteNote} note={note} />;
                })}
            </div>
        </>
    );
}

export default Notes;