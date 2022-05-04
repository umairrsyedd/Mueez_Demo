import React, { useEffect } from "react";
import {useParams } from "react-router-dom";
import { Card } from "@mui/material";
import "./Home.css";
import {useLocation} from 'react-router-dom';

export default function Home() {
  let params = useParams();
  const [isLoading, setIsLoading] = React.useState(true);
  const [isTeacher, setIsTeacher] = React.useState(false);
  const {state} = useLocation();
  const {data} = state;
  useEffect(() => {
  setIsTeacher(data.role === "teacher");
  setIsLoading(false);
  }, [data]);
  return (
    <>
    <div className="Container">
    <h2 className="Heading">Dashboard</h2>
      <div className="Card__Container">
        
        <div className="Card">
        <h3>Student Project App</h3>
        <button onClick={
          () => {
            window.location.href = `http://localhost:3008`
          }
        }>
          Go to App
        </button>
        </div> 
           <div className = "Card">
        <h3 className= {`${isTeacher ? "" : "HeadingDisabled"}`}>Teacher's Dashboard</h3>
        <button className= {`${isTeacher ? "" : "ButtonDisabled"}`} onClick={
          () => {
            window.location.href = `http://localhost:3008`
          }
        }>
          Go to Dashboard
        </button>
        </div>
      </div>
      </div>
    </>
  );
}



