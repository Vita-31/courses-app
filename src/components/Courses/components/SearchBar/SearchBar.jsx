import Button from '../../../../common/Button/Button'
import Input from '../../../../common/Input/Input'
import './SearchBar.css'

function SearchBar() {
  return (
    <div className="searchbar">
        <Input type="text" placeholder="Enter course name"/>
        <Button bg="gradient" width="md">Search</Button>
    </div>
  )
}

export default SearchBar