import React from "react";
import { useState, useEffect } from "react";
import Quizzcategories from "./Quizzcategories";
import myq from "./Data.js";
export default function Quizzapp(){
    const [Categories, setCategories] = useState([])
    const [Quiz, setQuiz] = useState([])
    const [Currentquestion, setCurrentquestion] = useState(0)

    useEffect(()=>{
        fetch("https://opentdb.com/api.php?amount=10&category=27&type=multiple")
        .then((res)=> res.json())
        .then((data)=> setQuiz(data.results))
    },[])
    const quizes = myq.map((item)=>{
        //const category = item.category;
        //const quiztype = item.type;
        //const questions = item.question
        //const wronganswers = item.incorrect_answers;
       // const correctanswer = item.correct_answer;
       // const answerslen = wronganswers.length;
       // const ansposition = Math.floor(Math.random() * (answerslen-0)+0);
       // const options = wronganswers.splice(ansposition, 0, correctanswer);
        //const answers = ""
        return  <ul key={item.text}><li>{item.text}</li></ul>}
        )

    const myans = myq[Currentquestion].options.map((t)=>{
        return <ul key={t.id}><li>{t.text}</li></ul>
    })
    console.log(myq.length)
    /*const delay = (time, callback)=>{
        setTimeout(()=>{
            callback();
        }, time)
    }
    delay(3000, ()=>{console.log("hello w")})
    */
    return(
        <div className="quiz">
            {quizes}
            {myq[Currentquestion].options.map((q)=>{
                function handleclick(q){
                    if(q.isCorrect === true){
                        console.log(`the answer is ${q.text}`)
                       Currentquestion === myq.length-1? setCurrentquestion(0): setCurrentquestion((oldval)=>oldval+1)
                    }else{
                        console.log("wrong")
                    }
                }
                return <div key={q.id} onClick={()=>handleclick(q)}>{q.text}</div>;
            })}
            <p>{myq[Currentquestion].text}</p>
            {myans}
          <Quizzcategories />
        </div>
    )
}