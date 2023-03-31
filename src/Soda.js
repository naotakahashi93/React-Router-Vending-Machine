import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhiskeyGlass } from '@fortawesome/free-solid-svg-icons'

const Soda =() =>{
    console.log("redering")
    return (
        <>
        <FontAwesomeIcon icon={faWhiskeyGlass} size="3x"/>
        <br></br>
        <small> yum! </small>
        </>

    )

}

export default Soda;