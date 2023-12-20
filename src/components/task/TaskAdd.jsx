import React, { useState } from 'react'

export const TaskAdd = ({ onClickAdd }) => {

    const [valueTask, setValueTask] = useState('');

    const onChangeDescripcion = (event) => {
        // console.log(event.target.value);
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
            onChange={onChangeDescripcion}
        />
    </div>
    <div className="mb-3 col-5">
        <button 
            className='btn btn-success'
            onClick={() => onClickAdd(valueTask)}
        >
            AGREGAR
        </button>
    </div>
    </>
  )
}
