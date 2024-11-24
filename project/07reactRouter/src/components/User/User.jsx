import React from 'react'
import { useParams } from 'react-router-dom'

export function User(props) {

    const {userid} = useParams()
    
    return (
        <>
            <div > User  : {userid}</div>
        </>
    )
}
