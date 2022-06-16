import Button from '../../../../common/Button/Button'
import './CourseCard.css'

function CourseCard({course}) {

    const hours = Math.floor(course.duration / 60 % 60).toString();
    const minutes = Math.floor(course.duration / 60 / 60 % 60).toString();

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
                    <p>Author</p>
                </div>
                <div className="cardInfo">
                    <p className="cardInfoTitle">Duration:</p>
                    <p>{ hours < 9 ? `0${hours}` : hours } : {minutes < 9 ? `0${minutes}` : minutes} hours</p>
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