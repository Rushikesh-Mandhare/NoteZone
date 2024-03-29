import { useState } from "react";
import NotesContext from "./NotesContext";

const NotesState = (props) => {

    const initialNotes= [
        {
            "_id": "6606f74c72f11cd741529336",
            "user": "6606f4e78dd0a90bbdde4414",
            "title": "Avengers",
            "description": "Join The Avengers",
            "tag": "Top Secret",
            "date": "2024-03-29T17:15:56.487Z",
            "__v": 0
        },
        {
            "_id": "6606f78372f11cd741529338",
            "user": "6606f4e78dd0a90bbdde4414",
            "title": "Team Web Worriors",
            "description": "Web Worriors Secret meating",
            "tag": "Top Secret",
            "date": "2024-03-29T17:16:51.826Z",
            "__v": 0
        },
        {
            "_id": "6606f7w4c72f11cd741529336",
            "user": "6606f4e78dd0a90bbdde4414",
            "title": "Avengers",
            "description": "Join The Avengers",
            "tag": "Top Secret",
            "date": "2024-03-29T17:15:56.487Z",
            "__v": 0
        },
        {
            "_id": "6606f78f372f11cd741529338",
            "user": "6606f4e78dd0a90bbdde4414",
            "title": "Team Web Worriors",
            "description": "Web Worriors Secret meating",
            "tag": "Top Secret",
            "date": "2024-03-29T17:16:51.826Z",
            "__v": 0
        },
        {
            "_id": "6606f74ddc72f11cd741529336",
            "user": "6606f4e78dd0a90bbdde4414",
            "title": "Avengers",
            "description": "Join The Avengers",
            "tag": "Top Secret",
            "date": "2024-03-29T17:15:56.487Z",
            "__v": 0
        },
        {
            "_id": "6606f78372dsf11cd741529338",
            "user": "6606f4e78dd0a90bbdde4414",
            "title": "Team Web Worriors",
            "description": "Web Worriors Secret meating",
            "tag": "Top Secret",
            "date": "2024-03-29T17:16:51.826Z",
            "__v": 0
        },
        {
            "_id": "6606f74c72fssw11cd741529336",
            "user": "6606f4e78dd0a90bbdde4414",
            "title": "Avengers",
            "description": "Join The Avengers",
            "tag": "Top Secret",
            "date": "2024-03-29T17:15:56.487Z",
            "__v": 0
        },
        {
            "_id": "6606f7837as2f11cd741529338",
            "user": "6606f4e78dd0a90bbdde4414",
            "title": "Team Web Worriors",
            "description": "Web Worriors Secret meating",
            "tag": "Top Secret",
            "date": "2024-03-29T17:16:51.826Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(initialNotes)

    return (
        <NotesContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NotesContext.Provider>
    )
}

export default NotesState; 