"use client"
import React, {useState} from 'react'
import SearchManufacturer from './SearchManufacturer';


export default function SearchBar() {
    const [manufacturer, setManufacturer] = useState("");

    const handleSubmit = () =>{}
  return (
    <form className='searchbar' onSubmit={handleSubmit}>
        <div className='search__item'>
            <SearchManufacturer
            manufacturer = {manufacturer}
            setManufacturer = {setManufacturer}/>
        </div>
    </form>
  )
}
