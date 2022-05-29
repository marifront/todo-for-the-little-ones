import React from 'react'
import { BsCheckAll } from 'react-icons/bs'

const CheckItem = ({ isCompleted }) => {
    return (
        <div className={`border-2 rounded-lg border-pink-800 w-8 h-8 flex items-center justify-center ${isCompleted ? 'bg-pink-300' : ''}`}>
            {isCompleted &&
                <BsCheckAll size={20} className='text-pink-800' />
            }
        </div>
    )
}

export default CheckItem 