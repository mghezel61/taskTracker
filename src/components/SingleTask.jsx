import {FaTimes} from 'react-icons/fa'
const SingleTask = ({ task, onDelete, onToggle }) => {
//   const reminder = task.reminder;

  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=>onToggle(task.id)}>
      <h3>{task.title}
       <FaTimes onClick={()=>onDelete(task.id)}
        style={{color:"red", cursor:"pointer"}}/> </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default SingleTask;
