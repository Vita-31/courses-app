import { useState } from 'react';
import Button from '../../common/Button/Button'
import Input from '../../common/Input/Input'
import { mockedAuthorsList, mockedCoursesList } from '../../constants';
import { pipeGenerator } from '../../helpers/pipeDuration';
import './CreateCourse.css'

function CreateCourse() {

  const [author, setAuthor] = useState({});
  const [minutes, setMinutes] = useState('');
  const [newCourse, setNewCourse] = useState({});
  const [addedAuthor, setAddedAuthor] = useState([]);
  const [removedAuthor, setRemovedAuthor] = useState([]);


  function createAuthor(event) {
    event.preventDefault()
    const authorNameValue = event.target.name.value.trim();
    setAuthor({id: Date.now(), name: authorNameValue})
  }

  function addMinutes(event) {
    event.preventDefault();
    const minutes = event.target.duration.value.trim();
    setMinutes(minutes)
  }

  function addCourse(event) {
    event.preventDefault();
    const newCourse = {
      id: Date.now(),
      title: event.target.title.value.trim(),
      description: event.target.description.value.trim(),
      duration: minutes,
      authors: mockedAuthorsList.filter(author => {return author.id})
    }
    setNewCourse(newCourse)
  }
  mockedCoursesList.push(newCourse)
  mockedAuthorsList.push(author);

  // function addAuthor(event) {
  //   const authorId = event.target.id;
  //   const authors = mockedAuthorsList.filter(a => {
  //     const au = a.id !== authorId
  //     return au
  //   })
  //   setAddedAuthor(author)
  // }
  return (
    <div className='course'>
      <form onSubmit={addCourse}>
        <div className='courseTop'>
          <div className="courseBlock">
            <h2 className="title">Title:</h2>
            <Input type="text" name="title" placeholder="Enter title"/>
          </div>
          <Button bg="add" width="md">Add course</Button>
        </div>
        <div className="courseBlock">
            <h2 className="title">Description:</h2>
            <textarea className='textarea' name='description' placeholder="Enter description"></textarea>
          </div>
      </form>
      <div className="courseAuthors">
        <div>
          <div className="courseAuthorsBlock">
            <h2 className="courseAuthorsTitle">Add Author</h2>
            <form className="courseBlock" onSubmit={createAuthor}>
              <h2 className="title">Author name:</h2>
              <Input type="text" name="name" placeholder="Enter author name"/>
            </form>
          </div>
          <div className="courseAuthorsBlock">
            <h2 className="courseAuthorsTitle">Duration</h2>
            <form className="courseBlock" onSubmit={addMinutes}>
              <h2 className="title">Duration:</h2>
              <Input type="number" name="duration" placeholder="Enter duration in minutes"/>
            </form>
            <div className="duration">
              <div className="title">Duration</div>
              <div className="durationTime"> {pipeGenerator(minutes)} </div>
            </div>
          </div>
        </div>
        <div>
          <div className="courseAuthorsBlock">
            <h2 className="courseAuthorsTitle">Authors</h2>
            { mockedAuthorsList.map(author => {
              return <div className="box" key={author.id}>
                <div className="name" key={author.id}>{author.name}</div>
                <Button bg='author' width="md" id={author.id}>Add Author</Button>
              </div>
            })}
          </div>
          <div className="courseAuthorsBlock">
            <h2 className="courseAuthorsTitle">Course authors</h2>
            <div className="courseEmpty">Authors list is empty</div>
            <div className="box">
              <div className="name">author</div>
              <Button bg='author' width="md">Delete Author</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateCourse