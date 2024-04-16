import React, { useContext, useState } from 'react';
import NotesContext from '../context/NotesContext';

const AddNote = () => {
    const context = useContext(NotesContext);
    const { add } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "Default" });

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        add(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" }); // Clear input fields after submission
    };

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="container my-3">
                <h3>Add a Note</h3>
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
                    
                    <button type="submit" className="btn btn-primary">Add Note</button>
                </form>
            </div>
        </>
    );
};

export default AddNote;
 