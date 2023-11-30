import React, { useState } from 'react'
import { TaskCard } from './TaskCard'
import { TaskAdd } from './TaskAdd'
import { dataCard } from '../../data/Task';

export const Task = () => {

    const [addDataCard, setAddDataCard] = useState(dataCard)

    const onClickAddTask = (valueTask) => {
       
        const newTaskCardObj = {
            id: addDataCard[addDataCard.length - 1].id + 1,
            taskTitle: valueTask,
        }

        setAddDataCard([
            ...addDataCard,
            newTaskCardObj
        ])

        console.log(newTaskCardObj)
    }


    const deleteCard = (id) => {
        const newArrCards = addDataCard.filter(item => item.id != id);
        setAddDataCard(newArrCards)
    }

  return (
    <div className="container" id="featured-3">
        <div className="row py-5">
            { addDataCard.map(cardItem => (
                <TaskCard 
                    key={cardItem.id} 
                    dataCardItem={cardItem}
                    deleteCard={deleteCard}
                />
            ))}
        </div>
        <TaskAdd onClickAddTask={onClickAddTask}/>
    </div>
  )
}
