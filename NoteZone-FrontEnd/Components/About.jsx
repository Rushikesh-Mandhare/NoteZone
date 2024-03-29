import React, {useContext} from 'react'
import NotesContext from '../context/NotesContext';


const About = () => {
  const a= useContext(NotesContext)
  return (
    <div>
      My Name is {a.Name}
    </div>
  )
}

export default About;
