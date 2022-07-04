import { NavLink, useNavigate } from 'react-router-dom'
import Button from '../../common/Button/Button'
import { mockedCoursesList } from '../../constants'
import CourseCard from './components/CourseCard/CourseCard'
import SearchBar from './components/SearchBar/SearchBar'
import './Courses.css'


function Courses({searchQuery, setSearchQuery}) {

  const filteredCourses = mockedCoursesList.filter(course => {
    return `${course.id} ${course.title}`.toLocaleLowerCase().includes(searchQuery)
  })

  const navigate = useNavigate();

  if(filteredCourses.length === 0) {
    return <h2>Courses not found!</h2>
  }

  return (
    <>
      <div className="actions">
        <SearchBar setSearchQuery={setSearchQuery}/>
        <Button navigate="/create" buttonText="Add new course" />
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
