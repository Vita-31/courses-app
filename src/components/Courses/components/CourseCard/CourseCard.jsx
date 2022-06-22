import Button from '../../../../common/Button/Button'
import { mockedAuthorsList } from '../../../../constants'
import { dateGeneration } from '../../../../helpers/dateGeneratop'
import { pipeGenerator } from '../../../../helpers/pipeDuration'
import './CourseCard.css'

function CourseCard({course}) {
   const courseAuthorsNames = course.authors.map((authorId) => mockedAuthorsList.find((author) => authorId === author.id )?.name ).join(', ')

  return (
    <div className='card'>
        <div className="cardContent">
            <h2 className="cardTitle">{ course.title }</h2>
            { course && <p className="cardDesc">{ course.description }</p>}
        </div>
        <div className="cardBlock">
            <div className="cardBlockInfo">
                <div className="cardInfo">
                    <p className="cardInfoTitle">Authors:</p>
                    <p>{courseAuthorsNames}</p>
                </div>
                <div className="cardInfo">
                    <p className="cardInfoTitle">Duration:</p>
                    <p> {pipeGenerator(course.duration)} </p>
                </div>
                <div className="cardInfo">
                    <p className="cardInfoTitle">Created:</p>
                    <p></p>
                </div>
            </div>
            <div className="cardBtn">
                <Button border='border' bg='blue' width="md" className="cardBtn">Show course</Button>
            </div>
        </div>
    </div>
  )
}

export default CourseCard
