import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button'
import Input from '../../common/Input/Input'
import { mockedAuthorsList } from '../../constants';
import { pipeGenerator } from '../../helpers/pipeDuration';
import './CreateCourse.css'

function CreateCourse() {

  const navigate = useNavigate()

  const [duration, setDuration] = useState('');
  const [courses, setCourses] = useState({});
  const [allAuthors, setAllAuthors] = useState(mockedAuthorsList);
  const [courseAuthors, setCourseAuthors] = useState([])

  function createAuthor(event) {
    event.preventDefault()
    const newAuthor = {
      id: Date.now(), 
      name: event.target.name.value.trim()
    }
    allAuthors(prev => [...prev, newAuthor])
  }

  function addMinutes(event) {
    setDuration(Number(event.target.value))
  }

  function addAuthors(currentAuthor) {
    setAllAuthors(prev => prev.filter(author => author.id !== currentAuthor.id))
    setCourseAuthors(prev => [...prev, currentAuthor])
  }

  function deleteAuthors(currentAuthor) {
    setCourseAuthors(prev => prev.filter(author => author.id !== currentAuthor.id))
    setAllAuthors(prev => [...prev, currentAuthor])
  }

  function addCourse(event) {
    event.preventDefault();
    const newCourse = {
      id: Date.now(),
      title: event.target.title.value.trim(),
      description: event.target.description.value.trim(),
      duration,
      authors: courseAuthors.map(author => author.id)
    }
    setCourses(prev => [...prev, newCourse])
    navigate('/')
  }

  return (
    <div className='course'>
      <form onSubmit={addCourse}>
        <div className='courseTop'>
          <Input type="text" name="title" placeholder="Enter title" labelText="Title:"/>
          <Button buttonText="Add course" />
        </div>
        <div className="courseBlock">
          <h2 className="courseBlockTitle">Description:</h2>
          <textarea className='textarea' name='description' placeholder="Enter description"></textarea>
        </div>
      </form>
      <div className="courseAuthors">
        <div>
          <div className="courseAuthorsBlock">
            <h2 className="courseAuthorsTitle">Add Author</h2>
            <form onSubmit={createAuthor}>
              <Input type="text" name="name" placeholder="Enter author name" labelText="Author name:"/>
            </form>
          </div>
          <div className="courseAuthorsBlock">
            <h2 className="courseAuthorsTitle">Duration</h2>
            <form>
              <Input 
                labelText="Duration:"
                type="number" 
                name="duration" 
                onChange={addMinutes} 
                step="1" 
                max="1000" 
                placeholderText="Enter duration in minutes"
              />
            </form>
            <div className="duration">
              <div className="title">Duration</div>
              <div className="durationTime"> {pipeGenerator(duration)} </div>
            </div>
          </div>
        </div>
        <div>
          <div className="courseAuthorsBlock">
            <h2 className="courseAuthorsTitle">Authors</h2>
            { allAuthors.length > 0 ?
              allAuthors.map(author => {
                return <div className="box" key={author.id}>
                  <div className="name">{author.name}</div>
                  <Button onClick={() => addAuthors(author)} buttonText="Add Author" />
                </div>
              }) : <div className='courseEmpty'>Авторів немає</div>}
          </div>
          <div className="courseAuthorsBlock">
            <h2 className="courseAuthorsTitle">Course authors</h2>
            {courseAuthors.length > 0 ? 
              courseAuthors.map(author => {
                return <div className="box" key={author.id}>
                  <div className="name">{author.name}</div>
                  <Button onClick={() => deleteAuthors(author)} buttonText="Delete Author" />
                </div>
              }) : <div className='courseEmpty'>Авторів немає</div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateCourse