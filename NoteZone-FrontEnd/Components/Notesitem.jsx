import React from 'react';

const Notesitem = ({ note, openModal, deleteNote }) => {
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body d-flex justify-content-between align-items-center">
                    <div>
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description}</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <lord-icon
                            src="https://cdn.lordicon.com/zfzufhzk.json"
                            trigger="hover"
                            delay="1500"
                            stroke="bold"
                            state="hover-line"
                            style={{ width: "40px", height: "60px", marginRight: "10px", cursor: "pointer" }}
                            onClick={() => { openModal(note) }}
                        >
                        </lord-icon>
                        <lord-icon
                            src="https://cdn.lordicon.com/xekbkxul.json"
                            trigger="hover"
                            stroke="bold"
                            style={{ width: "40px", height: "60px", cursor: "pointer" }}
                            onClick={() => { deleteNote(note._id) }}
                        >
                        </lord-icon>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notesitem;
