import React, { useContext, useState } from 'react';
import NotesContext from '../context/NotesContext';

const AddNote = () => {
    const context = useContext(NotesContext);
    const { add } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "Default" });

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        add(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "Default" }); // Reset tag to default value
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

                    <button type="submit" className="btn btn-primary d-flex justify-content-between align-items-center"disabled={note.title.length<5 ||note.description.length<5} >
                        <lord-icon
                            src="https://cdn.lordicon.com/zrkkrrpl.json"
                            trigger="hover"
                            stroke="bold"
                            state="hover-swirl"
                            colors="primary:#ffffff,,secondary:#e4e4e4"
                            style={{ width: "25px", height: "40px", marginRight: "10px"}}>
                        </lord-icon>Add Note</button>
                </form>
            </div>
        </>
    );
};

export default AddNote;
