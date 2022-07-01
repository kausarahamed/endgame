import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navber from "./Navber/Navber";
import Calendar from "./Calendar/Calendar";
import Done from "./Done";
import Calendars from "./Calendar/Calendars";
import Update from "./Update";
import Header from "./Navber/Header";
import Notfound from "./notfound/Notfound";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Navber></Navber>}></Route>
        <Route path="/calendar" element={<Calendar></Calendar>} />
        <Route path="/completed" element={<Done></Done>} />
        <Route path="/calendars" element={<Calendars></Calendars>} />
        <Route path="update/:id" element={<Update></Update>} />
        <Route path="*" element={<Notfound></Notfound>} />
      </Routes>
    </div>
  );
}

export default App;
