import React from 'react'
import { FiSearch } from 'react-icons/fi'

const Search = ({setSearchTerm}) => {
  return (
    <div className="search_bar">
        <input
          type="text"
          placeholder="Search products"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      
       <button> <FiSearch /></button>
      </div>
  )
}

export default Search