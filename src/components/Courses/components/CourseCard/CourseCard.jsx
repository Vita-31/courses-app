import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../common/Button/Button';
import { dateGeneration } from '../../../../helpers/dateGenerator';
import { pipeGenerator } from '../../../../helpers/pipeDuration';
import { getData } from '../../../../services';
import { getAuthors } from '../../../../store/authors/actionCreators';
import { authorsSelectors } from '../../../../store/authors/selectors';
import { deleteCourse } from '../../../../store/courses/actionCreators';
import './CourseCard.css';

function CourseCard({course}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authorsList = useSelector(authorsSelectors);

    useEffect(() => {
        getData('http://localhost:3001/authors')
            .then(res => dispatch(getAuthors(res)))
            .catch(err => console.log(err))
    }, [])

    const courseAuthorsNames = course.authors.map((authorId) => authorsList.find((author) => authorId === author.id )?.name ).join(', ')

    function setShowCoursePage() {
        navigate(`/courses/${course.id}`);
    }

    function setDeleteCourse() {
        dispatch(deleteCourse(course.id))
    }

  return (
    <div className='card'>
        <div className="cardContent">
            <h2 className="cardTitle">{ course.title }</h2>
            <p className="cardDesc">{ course.description }</p>
        </div>
        <div className="cardBlock">
            <dl className="cardBlockInfo">
                <div className="cardInfo">
                    <dt className="cardInfoTitle">Authors:</dt>
                    <dd className='cardInfoAuthors'>{courseAuthorsNames}</dd>
                </div>
                <div className="cardInfo">
                    <dt className="cardInfoTitle">Duration:</dt> 
                    <dd> {pipeGenerator(course.duration)} </dd>
                </div>
                <div className="cardInfo">
                    <dt className="cardInfoTitle">Created:</dt>
                    <dd>{ dateGeneration(course.creationDate) }</dd>
                </div>
            </dl>
            <div className="cardBtns">
                <Button buttonText="Show course" onClick={setShowCoursePage}/>
                <Button buttonText="Delete" onClick={setDeleteCourse}/>
                <Button buttonText="Update"/>
            </div>
        </div>
    </div>
  )
}

export default CourseCard
