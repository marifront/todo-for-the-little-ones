import React from 'react'
import CheckItem from './CheckItem'

const MyTodoItem = ({ item, changeTodoItem }) => {
    return (
        <button className='flex flex-row items-center mb-4 w-100'
            onClick={() => changeTodoItem(item._myId)}>
            <CheckItem isCompleted={item.isCompleted} />
            <div className={`${item.isCompleted ? 'line-through' : ''}`}>
                {item.mytitle}
            </div>
        </button >
    )
}

export default MyTodoItem 