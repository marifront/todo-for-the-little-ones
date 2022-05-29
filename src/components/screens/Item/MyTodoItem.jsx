import React from 'react'
import CheckItem from './CheckItem'

const MyTodoItem = ({ item }) => {
    return (
        <div>
            <CheckItem />
            {item.mytitle}
        </div>
    )
}

export default MyTodoItem 