import { mockedCoursesList } from '../../constants'
import CourseCard from './components/CourseCard/CourseCard'
import './Courses.css'

function Courses({searchQuery}) {


  return (
    <div className='courses'>
        {mockedCoursesList
        .filter(course => {
          return `${course.id} ${course.title}`.toLocaleLowerCase().includes(searchQuery)
        })
        .map(course => {
            return <CourseCard key={course.id} course={course}/>
        })}
    </div>
  )
}

export default Courses