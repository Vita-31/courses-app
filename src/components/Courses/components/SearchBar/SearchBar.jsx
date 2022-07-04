import { useState } from 'react';
import Button from '../../../../common/Button/Button'
import Input from '../../../../common/Input/Input'
import './SearchBar.css'

function SearchBar({setSearchQuery}) {

    function search(event) {
        event.preventDefault();
        const query = event.target.search.value.toLowerCase().trim();
        setSearchQuery(query)
    }
    
  return (
    <form className="searchbar" onSubmit={search}>
        <Input type="text" name="search" placeholderText="Enter course name"/>
        <Button buttonText="Search" type="submit"/>
    </form>
  )
}

export default SearchBar