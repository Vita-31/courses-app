import { mockedCoursesList } from '../../constants'
import CourseCard from './components/CourseCard/CourseCard'
import './Courses.css'

function Courses() {

  return (
    <div className='courses'>
        {mockedCoursesList.map(course => {
            return <CourseCard key={course.id} course={course}/>
        })}
    </div>
  )
}

export default Courses