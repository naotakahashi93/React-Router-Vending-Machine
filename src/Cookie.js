import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCookie } from '@fortawesome/free-solid-svg-icons'

const Cookie =() =>{
    console.log("redering")
    return (
        <>
        <FontAwesomeIcon icon={faCookie} size="3x"/>
        <br></br>
        <small> yum! </small>
        </>

    )

}

export default Cookie;