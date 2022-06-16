import CourseCard from './components/CourseCard/CourseCard'
import './Courses.css'

function Courses({courses, authors}) {

  return (
    <div className='courses'>
        {courses.map(course => {
            return <CourseCard key={course.id} course={course} authors={authors}/>
        })}
    </div>
  )
}

export default Courses