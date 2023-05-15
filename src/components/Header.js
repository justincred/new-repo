//import "../index.css"
const Header = ({onAdd, showAdd}) => {

  return (
    <header className = 'Header' >
        <h1 >{showAdd?'Create a new post' :'All Posts'}</h1>
        <button className = 'button'
        onClick={onAdd}>
            {showAdd?'Close':'Add Posts'}
        </button>
    </header>
  )
}

export default Header