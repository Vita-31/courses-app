import Button from '../../../../common/Button/Button'
import './CourseCard.css'

function CourseCard() {
  return (
    <div className='card'>
        <div className="cardContent">
            <h2 className="cardTitle">Corse title</h2>
            <p className="cardDesc">
                The community is home to millions of people from around the world who are curious and passionate about exploring and expressing their creativity.
                Domestika curates its teacher roster and produces every course in-house to ensure a high-quality online learning experienc
                Each expert teaches what they do best, with clear guidelines, true passion, and professional insight in every lesson.
            </p>
        </div>
        <div className="cardBlock">
            <div className="cardBlockInfo">
                <div className="cardInfo">
                    <p className="cardInfoTitle">Authors:</p>
                    <p>Author, Author</p>
                </div>
                <div className="cardInfo">
                    <p className="cardInfoTitle">Duration:</p>
                    <p>08:00 + hours</p>
                </div>
                <div className="cardInfo">
                    <p className="cardInfoTitle">Created:</p>
                    <p>01.02.22</p>
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