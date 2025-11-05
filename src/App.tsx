import "./App.css";

function App() {
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

  console.log(months);
  return (
    <div className="flex justify-center">
      {/* <table className="w-[80%] h-full mt-4">
        <thead className="w-full">
          <tr className="w-full flex justify-between">
            {daysOfWeek.map((day, _) => (
              <th key={_} className="text-3xl">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="overflow-y-scroll"></tbody>
      </table> */}
      <div className="w-[80%] h-full mt-4">
        <div className="w-full">
          <div className="w-full flex justify-between">
            {daysOfWeek.map((day, _) => (
              <div key={_} className="text-3xl">
                {day}
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-y-scroll"></div>
      </div>
    </div>
  );
}

export default App;
