import { mockedCoursesList } from '../../constants'
import CourseCard from './components/CourseCard/CourseCard'
import './Courses.css'

function Courses({searchQuery}) {
  const filteredCourses = mockedCoursesList.filter(course => {
    return `${course.id} ${course.title}`.toLocaleLowerCase().includes(searchQuery)
  })

  return (
    <>
    {filteredCourses.length ? <div className='courses'>
        {filteredCourses.map(course => {
            return <CourseCard key={course.id} course={course}/>
        })}
    </div> : <h2>Courses not found!</h2>}
    </>
  )
}

export default Courses
