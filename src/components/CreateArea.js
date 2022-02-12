import React, { useState } from 'react'

export default function CreateArea(props) {

    const [note, setNode] = useState({
        title: "",
        content: ""
    })
    function handleChange(event) {
       const {name,value} = event.target

       setNode(prevNote =>{
           return {
               ...prevNote,
               [name] : value
           }
       })

    }
    function submitNote(event){
       props.onAdd(note)
        event.preventDefault()
    }

    return (
        <div >
            <form className='create-note'>
                <input name='title' onChange={handleChange} value={note.title} placeholder='Title' />
                <textarea name="content" onChange={handleChange} value={note.content} placeholder='Take a note' />
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    )
}
