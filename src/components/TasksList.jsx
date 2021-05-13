import SingleTask from "./SingleTask";

const TasksList = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task) => {
        return <SingleTask task={task} onDelete={onDelete} onToggle = {onToggle} key ={task.id} />;
      })}
    </>
  );
};

export default TasksList;
