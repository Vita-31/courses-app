import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../../common/Button/Button'
import { mockedCoursesList } from '../../constants'
import { getData } from '../../services'
import CourseCard from './components/CourseCard/CourseCard'
import SearchBar from './components/SearchBar/SearchBar'
import { coursesSelectors } from "../../store/courses/selectors"
import { getCourses } from '../../store/courses/actionCreators'

function Courses({searchQuery, setSearchQuery}) {
  const courses = useSelector(coursesSelectors);
  const navigate = useNavigate();
  console.log(courses)
  const token = localStorage.getItem('token');

  const filteredCourses = mockedCoursesList.filter(course => {
    return `${course.id} ${course.title}`.toLocaleLowerCase().includes(searchQuery);
  })

  if(filteredCourses.length === 0) {
    return <h2>Courses not found!</h2>
  }

  function setCreatePage() {
    navigate("/courses/add")
  }

  getData('http://localhost:3001/courses')
    .then(res => getCourses(res))
    .catch(err => console.log(err))

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
