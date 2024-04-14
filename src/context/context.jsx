import { createContext, useState } from "react";
import runChat from "../config/core";

export const Context =  createContext();
const ContextProvider =(props) =>{

    const [input,setInput] =useState("");
    const [recentPrompt,setRecentPrompt] =useState("");
    const [prevPrompts,setprevPrompts] =useState([]);
    const [showresult,setshowresult] =useState(false);
    const [loading,setloading] =useState(false);
    const [resultdata,setresultdata]=useState("");

    const delayPara =(index,nextword)=>{
        setTimeout(function () {
            setresultdata(prev=>prev+nextword);
        },45*index)
    };
    const newChat = ()=>{
        setloading(false)
        setInput("")
        setshowresult(false)
    }
    const onSent = async (prompt) =>{
        setresultdata("")
        setloading(true)
        setshowresult(true)
        let response;
        if (prompt!==undefined){
            response = await runChat(prompt)
            setRecentPrompt(prompt)
        }
        else{
            setprevPrompts(prev=>[...prev,input])
            setRecentPrompt(input)
            response = await runChat(input)
        }
        
        
        
        let text = response.replace(/\*\*(.*?)\*\*/g, '<br/><b>$1</b><br/>');
        text = text.replace(/```/g, '<code>').replace(/```/g, '</code>');
        text = text.replace(/\*/g, '<br/>');
        text = text.replace(/\#\#/g, '<br/>');
        text = text.split(' ');
        for (let index = 0; index < text.length; index++) {
            const nextword=text[index];
            delayPara(index,nextword+" ")
        }
        setloading(false)
        setInput("")
    }

    

    const contextValue ={
        prevPrompts,
        setprevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showresult,
        loading,
        resultdata,
        input,
        setInput,
        newChat
    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider