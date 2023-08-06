import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Students from "./Students";
import Contact from "./Contact";
import { useState } from "react";
import StoreData from "./Store";
import AddNewStudent from "./AddNewStudent";
import EditStudent from "./EditStudent";

const RoutesCompo = () => {
  const [studentData, setStudentData] = useState([
    { Name: "Nitin", Age: 21, Course: "MERN", Batch: "EA23" },
    { Name: "Sumit", Age: 22, Course: "REACT", Batch: "EA23" },
    { Name: "Akanksha", Age: 23, Course: "Node", Batch: "EA23" },
    { Name: "Yash", Age: 24, Course: "MEAN", Batch: "EA23" },
  ]);

  return (
    <>
      <BrowserRouter>

      <div className="header">
        <ul>
          <li><NavLink to="/" className={ ({isActive}) => (isActive? "activeClass" : "notActiveClass" ) }>Home</NavLink></li>
          <li><NavLink to="/Students" className={ ({isActive}) => (isActive? "activeClass" : "notActiveClass" ) } >Students</NavLink></li>
          <li><NavLink to="Contact" className={ ({isActive}) => (isActive? "activeClass" : "notActiveClass" ) } >Contact</NavLink></li>
        </ul>
      </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Students" element={
              <StoreData.Provider value={{ stuName: studentData, updateStu: setStudentData }}>
                <Students />
              </StoreData.Provider>}/>

          <Route path="/Contact" element={<Contact />} />
          <Route path="/AddNewStudent" element={
              <StoreData.Provider value={{ stuName: studentData, updateStu: setStudentData }}>
                <AddNewStudent />
              </StoreData.Provider>}/>
          <Route path="//EditStudent" element={
              <StoreData.Provider value={{ stuName: studentData, updateStu: setStudentData }}>
                <EditStudent />
              </StoreData.Provider>}/>
              
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutesCompo;
