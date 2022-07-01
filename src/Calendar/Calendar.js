import { format } from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Calendar = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(new Date());

  const handler = (event) => {
    event.preventDefault();
    const date = event.target.date.value;
    const task = event.target.task.value;
    const newTask = {
      date,
      task,
      completed: false,
    };
    fetch("http://localhost:5000/task", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Added a new Task",
            showConfirmButton: false,
            timer: 1500,
          });
          event.target.reset();
          navigate("/");
        }
      });
  };
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row">
        <DayPicker mode="single" selected={selected} onSelect={setSelected} />
        <div>
          <h1 className="text-3xl text-center font-bold">Add task</h1>
          <form onSubmit={handler}>
            <input
              className="text-center w-full mt-4 text-2xl font-bold"
              type="text"
              name="date"
              value={format(selected, "PP")}
              readOnly
              disabled
            />
            <br />
            <textarea
              className="w-full rounded-lg m-2 p-2 border"
              name="task"
              placeholder="Add task"
            ></textarea>
            <div className="flex justify-center">
              <input type="submit" value="Add" className="btn " />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
