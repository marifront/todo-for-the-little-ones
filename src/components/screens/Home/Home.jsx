import React from 'react'
import MyTodoItem from '../Item/MyTodoItem'

const myTodos = [
    {
        _myId: 'd1',
        mytitle: ' Finish work',
        isCompleted: false
    },
    {
        _myId: 'd2',
        mytitle: ' Finish sleep',
        isCompleted: false
    },
]

const Home = () => {
    return (
        <div className='h-screen text-white bg-black'>
            {myTodos.map(item => (
                <MyTodoItem key={item._myId} item={item} />
            ))}
        </div>
    )
}

export default Home 