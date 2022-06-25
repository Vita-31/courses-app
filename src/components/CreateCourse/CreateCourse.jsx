import Button from '../../common/Button/Button'
import Input from '../../common/Input/Input'
import './CreateCourse.css'

function CreateCourse() {
  return (
    <div className='course'>
      <div>
        <div className='courseTop'>
          <div className="courseBlock">
            <h2 className="title">Title:</h2>
            <Input type="text" name="title" placeholder="Enter title"/>
          </div>
          <Button to="/create" bg="add" width="md">Add course</Button>
        </div>
        <div className="courseBlock">
            <h2 className="title">Description:</h2>
            <textarea className='textarea' placeholder="Enter description"></textarea>
          </div>
      </div>
      <div className="courseAuthors">
        <div>
          <div className="courseAuthorsBlock">
            <h2 className="courseAuthorsTitle">Add Author</h2>
            <div className="courseBlock">
              <h2 className="title">Author name:</h2>
              <Input type="text" name="title" placeholder="Enter author name"/>
            </div>
          </div>
          <div className="courseAuthorsBlock">
            <h2 className="courseAuthorsTitle">Duration</h2>
            <div className="courseBlock">
              <h2 className="title">Duration:</h2>
              <Input type="text" name="title" placeholder="Enter duration"/>
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default CreateCourse