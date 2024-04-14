import React, { useContext } from 'react'
import'./Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'


const Main = () => {
  const User= "Nitin";
  const {onSent,recentPrompt,showresult,loading,resultdata,setInput,input} = useContext(Context)
  
  return (
    <div className="main">
      
        <div className="nav">
            <p>SPACER</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
        {!showresult?<>
          <div className="greet">
              <p><span>Hello,{User}</span></p>
              <p>How Can I help you today?</p>
          </div>

          <div className="cards">

            <div className="card"  onClick={
              ()=>{
                setInput("Innovations in blockchain technology and its applications beyond cryptocurrencies")
                  }
                }>
              <p>Innovations in blockchain technology and its applications beyond cryptocurrencies</p>
              <img src={assets.compass_icon} alt="" />
            </div>

            <div className="card" onClick={
              ()=>{
                setInput("Impact of artificial intelligence on healthcare industry")
                }
              }>
              <p>Impact of artificial intelligence on healthcare industry</p>
              <img src={assets.bulb_icon} alt="" />
            </div>

            <div className="card" onClick={
              ()=>{
                setInput("Comparison of popular JavaScript frameworks: React vs. Angular vs. Vue")
                }
              }>
              <p>Comparison of popular JavaScript frameworks: React vs. Angular vs. Vue</p>
              <img src={assets.code_icon} alt="" />
            </div>

            <div className="card" onClick={
              ()=>{
                setInput("How to improve remote team collaboration in a post-pandemic world")
                }
              }>
              <p>How to improve remote team collaboration in a post-pandemic world</p>
              <img src={assets.message_icon} alt="" />
            </div>

          </div>
        </>:
        <div className='result'>
          <div className="result-title">
            <img src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>
          </div>
            
          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {loading?
              <div className="loader">
                <hr/>
                <hr/>
                <hr/>
              </div> :
              <p dangerouslySetInnerHTML={{__html:resultdata}}></p>
            }
          </div>
        </div>
        }
      
        
      <div className="main-bottom">
        <div className="search-box"> 
          <input onChange={(e)=>setInput(e.target.value)} id='input' value={input}  type="text" placeholder='Enter a prompt here'/>
          <div>
            <img onClick={()=>{
            }} src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            {input?<img onClick={()=>onSent()}src={assets.send_icon} alt="" />:null}
          </div>
        </div>
        <p className='bottom-info'>
          Spacer may display inaccurate info, including about people, so double-check its 
        </p>
      </div>
      </div> 
    </div>
    
  )
}

export default Main