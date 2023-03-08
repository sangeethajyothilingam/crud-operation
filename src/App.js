import "./App.css";
import "./sb-admin-2.min.css";
import Userlist from "./Userlist";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Portal from "./Portal";
import Dashboard from "./Dashboard";
import UserView from "./UserView";
import UserEdit from "./UserEdit";
import { useState } from "react";
import UserCreate from "./UserCreate";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      username: "User 1",
      email: "user1@gmail.com",
      country: "India",
      state: "TN",
      city: "Chennai",
    },
    {
      id: 2,
      username: "User 2",
      email: "user2@gmail.com",
      country: "India",
      state: "TN",
      city: "Chennai",
    },
    {
      id: 3,
      username: "User 3",
      email: "user3@gmail.com",
      country: "India",
      state: "TN",
      city: "Chennai",
    },
  ]);
  return (
    <div className="main">
      <h2 className="main-header">React Crud Operations</h2>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/portal" element={<Portal />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route
                path="userlist"
                element={<Userlist data={data} setData={setData} />}
              />
              <Route path="usercreate" element={<UserCreate data={data} />} />
              <Route path="userview/:id" element={<UserView data={data} />} />
              <Route path="useredit/:id" element={<UserEdit data={data} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
