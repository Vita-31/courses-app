import Button from '../../../../common/Button/Button'
import { mockedAuthorsList } from '../../../../constants'
import { dateGenerator } from '../../../../helpers/dateGeneratop'
import './CourseCard.css'

function CourseCard({course}) {
   const {hours, min} = dateGenerator(course.duration) 
   const courseAuthorsNames = course.authors.map((authorId) => mockedAuthorsList.find((author) => authorId === author.id )?.name ).join(',')

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
                    <p>{ hours < 9 ? `0${hours}` : hours } : {min < 9 ? `0${min}` : min} hours</p>
                </div>
                <div className="cardInfo">
                    <p className="cardInfoTitle">Created:</p>
                    <p>{ course.creationDate }</p>
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
