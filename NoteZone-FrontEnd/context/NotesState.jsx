import { useState } from "react";
import NotesContext from "./NotesContext";

const NotesState = (props) => {
    const host = "http://localhost:3000";
    const initialNotes = [];

    const [notes, setNotes] = useState(initialNotes);

    // Get all Notes
    const getNotes = async () => {
        try {
            const response = await fetch(`${host}/notes/fetchallnotes`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwYWI3NTRkNTlkZTZhOTIxZjdjNGNjIn0sImlhdCI6MTcxMTk3ODMyNH0.nmh8Hcg5b8DmIJ_bndDrX-tl9AR77oR8DUGvibwEvhE'
                },
            });
            const json = await response.json();
            setNotes(json); // assuming response is an array of notes
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    };

    // Add Note
    const add = async (title, description, tag) => {
        try {
            const response = await fetch(`${host}/notes/addnote`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwYWI3NTRkNTlkZTZhOTIxZjdjNGNjIn0sImlhdCI6MTcxMTk3ODMyNH0.nmh8Hcg5b8DmIJ_bndDrX-tl9AR77oR8DUGvibwEvhE'
                },
                body: JSON.stringify({ title, description, tag })
            });
            const newNote = await response.json();
            setNotes([...notes, newNote]); // Assuming the response contains the new note object
        } catch (error) {
            console.error('Error adding note:', error);
        }
    };
    

    //delete Note

    const deleteNote = async (id) => {
        try {
            const response = await fetch(`${host}/notes/deletenote/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwYWI3NTRkNTlkZTZhOTIxZjdjNGNjIn0sImlhdCI6MTcxMTk3ODMyNH0.nmh8Hcg5b8DmIJ_bndDrX-tl9AR77oR8DUGvibwEvhE'
                },
                body: JSON.stringify({ id }) // Pass the id in the body
            });
            const json = await response.json();
            setNotes(prevNotes => prevNotes.filter(note => note._id !== id));
        } catch (error) {
            console.error('Error deleting note:', error);
        }
    };
    
    // Edit Note
    const editNote = async (id, title, description, tag) => {
        try {
            const response = await fetch(`${host}/notes/updatenote/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwYWI3NTRkNTlkZTZhOTIxZjdjNGNjIn0sImlhdCI6MTcxMTk3ODMyNH0.nmh8Hcg5b8DmIJ_bndDrX-tl9AR77oR8DUGvibwEvhE'
                },
                body: JSON.stringify({ title, description, tag })
            });
            const updatedNote = await response.json();

            // Update the note in state
            setNotes(prevNotes => prevNotes.map(note => {
                if (note._id === id) {
                    return {
                        ...note,
                        title: updatedNote.title,
                        description: updatedNote.description,
                        tag: updatedNote.tag
                    };
                }
                return note;
            }));
        } catch (error) {
            console.error('Error editing note:', error);
        }
    };

    return (
        <NotesContext.Provider value={{ notes, add, deleteNote, editNote, getNotes }}>
            {props.children}
        </NotesContext.Provider>
    );
};

export default NotesState;
