import React from "react";
import LayOut from "./LayOut";
import Quizzapp from "../components/Quizzapp";
export default function Home(){
    return(
        <div>
        <LayOut />
        <h1>This is the home page</h1>
        <h2>My App</h2>
        
        <Quizzapp />
        
        </div>
    )
}