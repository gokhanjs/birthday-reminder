import React from 'react'
import './BirthdayPerson.css'

export default function BirthdayPerson({ person }) {
    return (
        <>
            <h1 className='person-name'>
                {person.name}
            </h1>
            <h3 className='person-birthday'>
                {person.birthday}
            </h3>
        </>
    )
}