import './CourseInfo.css'
import Button from '../../common/Button/Button'
import { useParams } from 'react-router-dom'

export default function CourseInfo() {
    const {courseId} = useParams();
    
  return (
    <div className='course'>
        <Button buttonText="< Back to courses" type="button"/>
        <h2 className="course__title">Title</h2>
        <div className="course-content">
            <p className="course__description">description</p>
            <div className="course__info">
                <div className="course-block">
                    <h3 className="course-block__title">ID:</h3>
                    <p className="course-block__desc">id number</p>
                </div>
                <div className="course-block">
                    <h3 className="course-block__title">Duration:</h3>
                    <p className="course-block__desc">time number</p>
                </div>
                <div className="course-block">
                    <h3 className="course-block__title">Created:</h3>
                    <p className="course-block__desc">created number</p>
                </div>
                <div className="course-block course-block--col">
                    <h3 className="course-block__title">Authors:</h3>
                    <p className="course-block__desc course-block__desc--mt">author 1</p>
                    <p className="course-block__desc">author 2</p>
                </div>
            </div>
        </div>
    </div>
  )
}
