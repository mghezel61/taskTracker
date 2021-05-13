import Button from "./Button";
import Input from "./Input";
import { useState } from "react";


const AddTask = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);


  const onSubmit = (e) => {
    e.preventDefault()

    if(!title || !day) {
      alert("Please fill in the blanks")
      return;
    } 

    addTask({title, day, reminder})
    setTitle("");
    setDay("");
    setReminder(false);
    // !day && alert('Please enter your day');
  }
  return (
    <form className="form-control" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="Appointment">New Task</label>
        <Input
          type="text"
          id="Appointment"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label
          htmlFor="dateAndtime"
        >
          Date and Time
        </label>
        <Input
          type="Date"
          id="dateAndtime"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="set-reminder">Set reminder</label>
        <Input
          type="checkbox"
          class="form-control-check"
          checked={reminder}
          cursor="pointer"
          id="set-reminder"
          onChange={(e) => setReminder(e.currentTarget.checked)}
          // onChange={(e) => setReminder(e.currentTarget.checked)} // it works too!
        />
      </div>
      <div className="form-control">
        <Button
          className="btn btn-block"
          color="white"
          type="submit"
          title="Add New Task"
        />
      </div>
    </form>
  );
};

export default AddTask;
