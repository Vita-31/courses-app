import './CourseInfo.css';
import Button from '../../common/Button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { mockedAuthorsList, mockedCoursesList } from '../../constants';
import { useEffect } from 'react';
import { dateGeneration } from '../../helpers/dateGenerator';
import { pipeGenerator } from '../../helpers/pipeDuration';

export default function CourseInfo() {
    const navigate = useNavigate();
    const {courseId} = useParams();
    const [course, setCourse] = useState(null);
    const courseAuthorsNames = course?.authors.map((authorId) => mockedAuthorsList.find((author) => authorId === author.id )?.name ).join(', ')

    useEffect((() => {
        const foundCourse = mockedCoursesList.find(course => course.id === courseId);
        if(foundCourse) {
            setCourse(foundCourse);
        }
    }), [courseId])

    if(!course) {
        return <h1>Course not found!</h1>
    }

    function backCourses() {
        navigate('/courses')
    }
    
  return (
    <div className='course'>
        <Button buttonText="< Back to courses" type="button" onClick={backCourses}/>
        <h2 className="course__title">{course?.title}</h2>
        <div className="course-content">
            <p className="course__description">{course?.description}</p>
            <div className="course__info">
                <div className="course-block">
                    <h3 className="course-block__title">ID:</h3>
                    <p className="course-block__desc">{course?.id}</p>
                </div>
                <div className="course-block">
                    <h3 className="course-block__title">Duration:</h3>
                    <p className="course-block__desc">{pipeGenerator(course?.duration)}</p>
                </div>
                <div className="course-block">
                    <h3 className="course-block__title">Created:</h3>
                    <p className="course-block__desc">{dateGeneration(course?.creationDate)}</p>
                </div>
                <div className="course-block course-block--col">
                    <h3 className="course-block__title">Authors:</h3>
                    {<p className="course-block__desc">{courseAuthorsNames}</p>}
                    {/* <p className="course-block__desc course-block__desc--mt">author 1</p>
                    <p className="course-block__desc">author 2</p> */}
                </div>
            </div>
        </div>
    </div>
  )
}
