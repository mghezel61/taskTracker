import Button from "./Button";
import Input from "./Input";

const AddTask = ({ addTask }) => {
  return (
    <form className="form-control">
      <div className="form-control">
        <label htmlFor="Appointment">New Task</label>
        <Input type="text" id="Appointment" />
      </div>
      <div className="form-control">
        <label
          htmlFor="dateAndtime"
          style={{ display: "block", marginTop: "20px" }}
        >
          Date and Time
        </label>
        <Input type="Date" id="dateAndtime" />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="set-reminder">Set reminder</label>
        <Input
          type="checkbox"
          class="form-control-check"
          cursor="pointer"
          id="set-reminder"
        />
      </div>
      <div className="form-control">
        <Button
          className="btn btn-block"
          color="white"
          type="submit"
          value="Add New Task"
          onClick={addTask}
        />
      </div>
    </form>
  );
};

export default AddTask;
