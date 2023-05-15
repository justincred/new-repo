import {useState} from'react'
function AddTask({onAdd}) {
    const[text,setText] = useState('')
    const[day,setDay] = useState('')
    const[reminder,setReminder] = useState('')
    const onSubmit = (e) =>{
        e.preventDefault()
        if(!text) {
            alert('Please addTask')
            return
        }
        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }
  return (
    <form className ='addForm' onSubmit = {onSubmit}>
        <div className = 'form'>
        <label>Post Title</label>
        <input type ='text' placeholder = 'Add Post Title'
        value = {text}
        onChange = {(e) => setText(e.target.value)}
            />
        </div>

        <div className = 'form'>
        <label>Contents</label>
        <input type ='text' placeholder = 'Add Body Contents'
        value = {day}
        onChange = {(e) => setDay(e.target.value)}/>
        </div>

        <div className = 'check'>
        <label>Flag Post</label>
        <input  type ='checkbox'
        checked = {reminder}
        value = {reminder}
        onChange = {(e) => setReminder(e.currentTarget.checked)}/>
        </div>
        <input type = 'submit' value = 'Upload Post'></input>
    </form>
  )
}

export default AddTask