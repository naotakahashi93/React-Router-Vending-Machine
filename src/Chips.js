import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBacon } from '@fortawesome/free-solid-svg-icons'

const Chips =() =>{
    console.log("redering")
    return (
        <>
        <FontAwesomeIcon icon={faBacon} size="3x"/>
        <br></br>
        <small> yum! </small>
        </>
    )

}

export default Chips;