import React from 'react'
import { Link } from "react-router-dom";
function Chubmap() {
  return (
    <>
    <main>
    <div className="chub-home container-fluid">
      <div className="row">
        <div className='col-sm-8 offset-sm-2' data-aos="fade-up" data-aos-duration="1000">
        <Link to="/chub-island">
            <img src='assets/images/Chubmap-large.png' className="img-fluid mx-auto d-block" alt="Chubmap" width={641} height={641}/>
        </Link>
        </div>
      </div>
      <div className="row mz-spacing">
        <div className='col-sm-8 offset-sm-2'>
            <h2>We can Have Title here</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div className='mz-spacing'></div>
            <h2>We can Have Title here</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
    </div>
    </main>
    </>
  )
}

export default Chubmap;