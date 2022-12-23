import React from 'react'
import { useState } from 'react';

function Code() {
    const [code, setCode] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Your code was: ${code}`)
    }  
  return (
    <>
    <main>
    <div className="chubs-list container-fluid">
      <div className="row">    
        <div className='col-sm-8 offset-sm-2' data-aos="fade-up" data-aos-duration="1000">
            <img src='assets/images/Chub-code.png' className="img-fluid mx-auto d-block" alt="Chub Code" width={559} height={419}/>
            <div className='mz-spacing'></div>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-6 offset-sm-3'>
          <form className='chub-search' onSubmit={handleSubmit}>
            <label>
              <input 
                className='code_input'
                type="text" 
                value={code}
                placeholder="Enter the code here"
                onChange={(e) => setCode(e.target.value)}
              />
            </label>
            <input className='code_submit' type="submit" value="Enter"/>
          </form>
        </div>
      </div>
    </div>
    </main>
    </>
  )
}

export default Code;