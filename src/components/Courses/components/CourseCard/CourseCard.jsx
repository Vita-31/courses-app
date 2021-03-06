import Button from '../../../../common/Button/Button'
import { mockedAuthorsList } from '../../../../constants'
import { dateGeneration } from '../../../../helpers/dateGenerator'
import { pipeGenerator } from '../../../../helpers/pipeDuration'
import './CourseCard.css'

function CourseCard({course}) {
   const courseAuthorsNames = course.authors.map((authorId) => mockedAuthorsList.find((author) => authorId === author.id )?.name ).join(', ')

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
            <div className="cardBtn">
                <Button buttonText="Show course"/>
            </div>
        </div>
    </div>
  )
}

export default CourseCard
