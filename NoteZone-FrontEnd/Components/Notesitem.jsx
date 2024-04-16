import React, {useContext} from 'react'
import NotesContext from '../context/NotesContext';

const Notesitem = (props) => {

    const context = useContext(NotesContext);
    const {deleteNote} =context;

    const { note } = props
    return (
        <div className="col-md-3">

            <div className="card my-3">

                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <i className="fa-solid fa-pen-to-square mx-3"></i>
                        <i className="fa-solid fa-trash-can mx-3" onClick={()=>{deleteNote(note._id)}}></i>
                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Notesitem
