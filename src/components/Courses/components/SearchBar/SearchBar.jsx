import Button from '../../../../common/Button/Button'
import Input from '../../../../common/Input/Input'
import './SearchBar.css'

function SearchBar() {

    function search(event) {
        event.preventDefault();
        const searchQuery = event.target.search.value;
        console.log(searchQuery)
    }

  return (
    <form className="searchbar" onSubmit={search}>
        <Input type="text" name="search" placeholder="Enter course name"/>
        <Button bg="gradient" width="md" type="submit">Search</Button>
    </form>
  )
}

export default SearchBar