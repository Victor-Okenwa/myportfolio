import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const BackTop = () => {
    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <button type='button' className='backTop btn'><FontAwesomeIcon icon={faArrowUp} onClick={handleScrollTop} /></button>
    )
}

export default BackTop;