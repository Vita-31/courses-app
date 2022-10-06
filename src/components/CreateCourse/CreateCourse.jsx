import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button'
import Input from '../../common/Input/Input'
import { pipeGenerator } from '../../helpers/pipeDuration';
import { authorsSelectors } from '../../store/authors/selectors';
import { getData } from '../../services';
import { getAuthors } from '../../store/authors/actionCreators';
import './CreateCourse.css'
import { addNewCourse } from '../../store/courses/actionCreators';
import { coursesSelectors } from '../../store/courses/selectors';

function CreateCourse() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authorsList = useSelector(authorsSelectors);
  const courses = useSelector(coursesSelectors);

  const [duration, setDuration] = useState('');
  // const [courses, setCourses] = useState({});
  const [allAuthors, setAllAuthors] = useState(authorsList);
  const [courseAuthors, setCourseAuthors] = useState([]);

  useEffect(() => {
    if(!authorsList) {
      getData('http://localhost:3001/authors')
      .then(res => dispatch(getAuthors(res)))
      .catch(err => console.log(err))
    }
  }, [authorsList])

  function createAuthor(event) {
    event.preventDefault()
    const newAuthor = {
      id: Date.now(), 
      name: event.target.name.value.trim()
    }
    allAuthors(prev => [...prev, newAuthor])
  }

  function addMinutes(event) {
    event.preventDefault();
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

    dispatch(addNewCourse(newCourse))
    // setCourses(prev => [...prev, newCourse])
    navigate('/courses')
  }

  return (
    <div className='create'>
      <form onSubmit={addCourse}>
        <div className='createTop'>
          <Input type="text" name="title" placeholder="Enter title" labelText="Title:"/>
          <Button buttonText="Add course" />
        </div>
        <div className="createBlock">
          <h2 className="createBlockTitle">Description:</h2>
          <textarea className='textarea' name='description' placeholder="Enter description"></textarea>
        </div>
      </form>
      <div className="createAuthors">
        <div>
          <div className="createAuthorsBlock">
            <h2 className="createAuthorsTitle">Add Author</h2>
            <form onSubmit={createAuthor}>
              <Input type="text" name="name" placeholder="Enter author name" labelText="Author name:"/>
            </form>
          </div>
          <div className="createAuthorsBlock">
            <h2 className="createAuthorsTitle">Duration</h2>
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
          <div className="createAuthorsBlock">
            <h2 className="createAuthorsTitle">Authors</h2>
            { allAuthors.length > 0 ?
              allAuthors.map(author => {
                return <div className="box" key={author.id}>
                  <div className="name">{author.name}</div>
                  <Button onClick={() => addAuthors(author)} buttonText="Add Author" />
                </div>
              }) : <div className='createEmpty'>Авторів немає</div>}
          </div>
          <div className="createAuthorsBlock">
            <h2 className="createAuthorsTitle">Course authors</h2>
            {courseAuthors.length > 0 ? 
              courseAuthors.map(author => {
                return <div className="box" key={author.id}>
                  <div className="name">{author.name}</div>
                  <Button onClick={() => deleteAuthors(author)} buttonText="Delete Author" />
                </div>
              }) : <div className='createEmpty'>Авторів немає</div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateCourse