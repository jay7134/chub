import React from 'react';

function Team() {
  return (
    <>
    <main>
    <div className="chubs-team container-fluid">
      <div className="row mz-spacing team_members" data-aos="fade-up" data-aos-duration="1000">
        <div className='col-md-3 col-sm-6'>
        <img src='assets/images/Team/1.png' className="img-fluid mx-auto d-block" alt="Chub Run" width={309} height={309}/>
            <h4>Adam Smith</h4>
            <p>Chief executive officer (CEO)</p>
        </div>
      
        <div className='col-md-3 col-sm-6'>
        <img src='assets/images/Team/2.png' className="img-fluid mx-auto d-block" alt="Chub Run" width={309} height={309}/>
            <h4>David</h4>
            <p>Chief operating officer (COO)</p>
        </div>

        <div className='col-md-3 col-sm-6'>
        <img src='assets/images/Team/3.png' className="img-fluid mx-auto d-block" alt="Chub Run" width={309} height={309}/>
            <h4>Timmy</h4>
            <p>Operations and production</p>
        </div>

        <div className='col-md-3 col-sm-6'>
        <img src='assets/images/Team/4.png' className="img-fluid mx-auto d-block" alt="Chub Run" width={309} height={309}/>
            <h4>Shroud</h4>
            <p>Chief financial officer or controller (CFO)</p>
        </div>
      </div>
      <div className="row mz-spacing team_members" data-aos="fade-up" data-aos-duration="1000">
        <div className='col-md-3 col-sm-6'>
        <img src='assets/images/Team/5.png' className="img-fluid mx-auto d-block" alt="Chub Run" width={309} height={309}/>
            <h4>Mike Hens</h4>
            <p>Executive assistants</p>
        </div>
      
        <div className='col-md-3 col-sm-6'>
        <img src='assets/images/Team/6.png' className="img-fluid mx-auto d-block" alt="Chub Run" width={309} height={309}/>
            <h4>John Davis</h4>
            <p>Product manager</p>
        </div>

        <div className='col-md-3 col-sm-6'>
        <img src='assets/images/Team/7.png' className="img-fluid mx-auto d-block" alt="Chub Run" width={309} height={309}/>
            <h4>Maria</h4>
            <p>Project manager</p>
        </div>

        <div className='col-md-3 col-sm-6'>
        <img src='assets/images/Team/8.png' className="img-fluid mx-auto d-block" alt="Chub Run" width={309} height={309}/>
            <h4>Eden Hazart</h4>
            <p>Finance manager</p>
        </div>
      </div>
    </div>
    </main>
    </>
  )
}

export default Team