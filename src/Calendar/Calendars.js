// import React from "react";

// const Calendars = () => {
//   return (
//     <div>
//       <h1>calde</h1>
//     </div>
//   );
// };

// export default Calendars;

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Calendars = () => {
  const [selected, setSelected] = useState(new Date());

  return (
    <div className="flex justify-center flex-wrap">
      <p>
        <DayPicker
          numberOfMonths={3}
          mode="single"
          selected={selected}
          onSelect={setSelected}
        />
      </p>
    </div>
  );
};

export default Calendars;
