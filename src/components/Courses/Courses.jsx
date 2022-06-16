import CourseCard from './components/CourseCard/CourseCard'
import './Courses.css'

function Courses({courses}) {
  return (
    <div className='courses'>
        {courses.map(course => {
            return <CourseCard key={course.id} course={course}/>
        })}
    </div>
  )
}

export default Courses