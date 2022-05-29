import React, { useState } from 'react'
import MyTodoItem from '../Item/MyTodoItem'

const data = [
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
    const [myTodos, setMyTodos] = useState(data);

    const changeTodoItem = (id) => {
        const copy = [...myTodos]
        const currentItem = copy.find(t => t._myId === id);
        currentItem.isCompleted = !currentItem.isCompleted;
        setMyTodos(copy);
    }

    // console.log(myTodos);

    return (
        <div className='h-screen  w-4/5 mx-auto'>
            <h1 className='text-lg font-bold mb-4'>Список дел на сегодня:</h1>
            {myTodos.map(item => (
                <MyTodoItem key={item._myId} item={item} changeTodoItem={changeTodoItem} />
            ))}
        </div>
    )
}

export default Home 