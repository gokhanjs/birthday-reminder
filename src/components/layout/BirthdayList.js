import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './BirthdayList.css'
// COMPONENTS
import BirthdayPerson from '../list/BirthdayPerson'
const BirthdayList = () => {
    const [people, setPeople] = useState([])

    const fetchPeople = async () => {
        const response = await axios.get('https://retoolapi.dev/Pr8rPW/data')
        setPeople(response.data)
    }

    useEffect(() => {
        fetchPeople()
    }, [])


    return (
        <div className='people-list'>
            {people.map((person, id) => (
                <div className='person-item' key={id}>
                    <BirthdayPerson person={person} />
                </div>
            ))}
        </div>
    )
}

export default BirthdayList

