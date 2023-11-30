import React, { useState } from 'react'

export const TaskAdd = ({ onClickAddTask }) => {

    const [valueTask, setValueTask] = useState('');

    const onChangeDescriptionTask = (event) => {
        setValueTask(event.target.value);
    }

    

  return (
    <>
        <div className="mb-3 col-5">
            <input 
                type="text" 
                className="form-control"  
                placeholder="Agregar una tarea"
                value={valueTask}
                onChange={(event) => onChangeDescriptionTask(event)}
            />
        </div>
        <div className="mb-3 col-5">
            <button 
                className='btn btn-success'
                onClick={() => onClickAddTask(valueTask)}
            >
                AGREGAR
            </button>
        </div>
    </>
  )
}
