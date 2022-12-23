import React from 'react';
import { Link } from "react-router-dom";
function Chubslist() {
  return (
    <>
    <main>
    <div className="chubs-list container-fluid">
      <div className="row mz-spacing">
        <div className='col-sm-6 col-md-4 offset-md-1' data-aos="fade-up" data-aos-duration="1000">
        <h2>Click the Chublist for play the game</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            
            <img src='assets/images/chub-run.png' className="img-fluid mx-auto d-block" alt="Chub Run" width={484} height={484}/>
        </div>
      
        <div className='offset-md-2 col-md-4 col-sm-6' data-aos="fade-up" data-aos-duration="1000">
            <h2>Click the code island to enter your code</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div className='mz-spacing'></div>
            <Link to="/code">
            <img src='assets/images/chub-code.png' className="img-fluid mx-auto d-block" alt="Chub Code" width={559} height={419}/>
            </Link>
        </div>
      </div>
    </div>
    </main>
    </>
  )
}

export default Chubslist;