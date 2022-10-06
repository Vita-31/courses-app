import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../../common/Button/Button'
import { getData } from '../../services'
import CourseCard from './components/CourseCard/CourseCard'
import SearchBar from './components/SearchBar/SearchBar'
import { coursesSelectors } from "../../store/courses/selectors"
import { getCourses } from '../../store/courses/actionCreators'
import { useEffect } from 'react'
import './Courses.css'

function Courses({searchQuery, setSearchQuery}) {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const courses = useSelector(coursesSelectors);

  useEffect(() => {
    getData('http://localhost:3001/courses')
    .then(res => {
      dispatch(getCourses(res))
    })
    .catch(err => console.log(err))
  }, [])

  const filteredCourses = courses.filter(course => {
    return `${course.id} ${course.title}`.toLocaleLowerCase().includes(searchQuery);
  })

  if(filteredCourses.length === 0) {
    return <h2>Courses not found!</h2>
  }

  function setCreatePage() {
    navigate("/courses/add")
  }

  return (
    <>
      <div className="actions">
        <SearchBar setSearchQuery={setSearchQuery}/>
        <Button onClick={setCreatePage} buttonText="Add new course" />
      </div>
      <>
      {
        <div className='courses'>
          {filteredCourses.map(course => {
              return <CourseCard key={course.id} course={course}/>
          })}
        </div>
      }
      </>
    </>
    
  )
}

export default Courses
