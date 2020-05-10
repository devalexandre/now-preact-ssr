import { h } from 'preact';
import { useState } from "preact/hooks";

import './style.css';


const App = () =>{
  const [task,setTasks] = useState([]);
  const [work,setWork] = useState('');


  const addTask = ()=>{
    setTasks([...task,work])
    setWork('');
  }
  const removeTask = (key)=>{
    task.splice(key,1);
    setTasks([...task])
  }

  const addWork= (ev) => {
    setWork(ev.target.value)

  }


  return (
      <div class="container">
        <nav className="panel">
          <p className="panel-heading">
            Tasks
          </p>
          <div className="panel-block">
            <p className="control has-icons-right has-text-centered" >
              <input onInput={ (e) => addWork(e)} className="input is-small is-rounded" style={'width:30%'} type="text"
                     placeholder="Write a task name" value={work}/>

              <button
                  onClick={() => addTask()}
                  is-left
                  className="button is-primary is-small">
                <i className="fas fa-plus"></i></button>

            </p>
          </div>

          { task.length > 0 ?
              task.map((item , key)=>(
                  <a className="panel-block" key={key}>
        <span className="task">
        { item }
        </span>

                    <button
                        onClick={()=> removeTask(key)}
                        is-left
                        className="button is-danger is-small is-right">
                      <i className="fas fa-trash"></i></button>
                  </a>
              ))
              :<p> Sem Tasks</p>

          }
        </nav>
      </div>
  )
}


export default App;