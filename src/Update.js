import { useEffect, useState } from "react";
import "react-day-picker/dist/style.css";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [updateTask, setUpdateTask] = useState({});
  const { date, task } = updateTask;
  useEffect(() => {
    fetch(`https://protected-bayou-89933.herokuapp.com/task/${id}`)
      .then((res) => res.json())
      .then((data) => setUpdateTask(data));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const task = e.target.task.value;

    fetch(`https://protected-bayou-89933.herokuapp.com/task/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ task }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Update Success");
          navigate("/");
        }
      });
  };
  return (
    <div className="w-1/2 mx-auto">
      <h1 className="text-3xl text-center font-bold">Update task</h1>
      <form onSubmit={handleUpdate}>
        <input
          className="text-center w-full mt-4 text-2xl font-bold"
          type="text"
          name="date"
          value={date}
          readOnly
          disabled
        />
        <br />
        <input
          className="w-full rounded-lg m-2 p-2 border"
          name="task"
          defaultValue={task}
          placeholder="Update task"
          type="text"
        ></input>
        <div className="flex justify-center">
          <input type="submit" value="Update" className="btn " />
        </div>
      </form>
    </div>
  );
};

export default Update;
