import { useState } from "react";
import "./App.css";

type Tasks = {
  id: number;
  name: string;
  description: string;
  done: boolean;
  edited: boolean;
};

function App() {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [taskName, setTaskName] = useState("");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className="flex w-full justify-center">
      <div className="w-[25%]">
        <div>
          {/* <button onClick={() => setTasks((prev) => prev !== undefined ? [...prev, [tasks?.length, taskName, "", false]].flat() : [])}>addTask</button> */}
          <button
            onClick={() =>
              setTasks((prev) =>
                [
                  prev,
                  {
                    id: tasks.length,
                    name: taskName,
                    description: "description",
                    done: false,
                    edited: false,
                  },
                ].flat()
              )
            }
            className="border-2 border-r-emerald-900"
          >
            addTask
          </button>
          <input onChange={(e) => setTaskName(e.target.value)} />
        </div>
        <div>
          {tasks.map((task) =>
            !task.edited ? (
              <div key={task.id} className="h-fit flex border-2 border-black">
                <div className="flex-col w-[85%]">
                  <h1>{task.name}</h1>
                  <p>{task.description}</p>
                  <input
                    type="checkbox"
                    onChange={(e) => (task.done = e.target.checked)}
                  />
                </div>
                <div className="w-[15%] flex flex-col ">
                  <button
                    onClick={() =>
                      setTasks((prev) =>
                        prev.map((t) =>
                          t.id === task.id
                            ? {
                                ...task,
                                edited: true,
                              }
                            : t
                        )
                      )
                    }
                  >
                    <img src="/solar--pen-line-duotone.svg"/>
                  </button>
                  <img
                    src="/solar--trash-bin-trash-linear.svg"
                    onClick={() =>
                      setTasks((prev) =>
                        prev.filter((item) => item.id !== task.id).map((t) => t)
                      )
                    }
                  />
                </div>
              </div>
            ) : (
              <div key={task.id} className="h-fit flex border-2 border-black">
                <div className="flex-col w-[85%]">
                  <input value={task.name}/>
                  <input value={task.description}/>
                  <input
                    type="checkbox"
                    onChange={(e) => (task.done = e.target.checked)}
                  />
                </div>
                <div className="w-[15%] flex flex-col ">
                  <button
                    onClick={() =>
                      setTasks((prev) =>
                        prev.map((t) =>
                          t.id === task.id
                            ? {
                                ...task,
                                edited: false,
                              }
                            : t
                        )
                      )
                    }
                  >
                    <img src="/solar--check-circle-line-duotone.svg"/>
                  </button>
                  <img
                    src="/solar--trash-bin-trash-linear.svg"
                    onClick={() =>
                      setTasks((prev) =>
                        prev.filter((item) => item.id !== task.id).map((t) => t)
                      )
                    }
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>
      {/*       
      TODO: LATER USE THIS FOR THE CALENDAR VIEW
      <div className="w-[80%] pt-4 h-screen">
        <div className="w-full h-full">
          <div className="w-full h-full flex justify-between">
            {daysOfWeek.map((day, _) => (
              <div key={_} className="text-3xl h-full flex-1">
                <h1>{day}</h1>
                <div className="w-full h-[90%] bg-red-400 border-2">
                  {Array.from({ length: 24 }).map((_, idx) => (
                    <div
                      key={idx}
                      className="h-[4.16%] border-b-2 flex justify-between items-center px-2"
                    >
                      
                      <div className="text-[1rem] relative left-0">{`${idx}:00`}</div>
                      <div></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        <div className="overflow-y-scroll"></div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
