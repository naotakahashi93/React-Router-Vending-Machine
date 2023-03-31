import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCandyCane } from '@fortawesome/free-solid-svg-icons'

const Candy =() =>{
    console.log("redering")
    return (
        <>
        <FontAwesomeIcon icon={faCandyCane} size="3x"/>
        <br></br>
        <small> yum! </small>
        </>

    )

}

export default Candy;