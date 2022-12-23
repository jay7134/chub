import { Link } from "react-router-dom";
function Home() {
  return (
  <main>
    <div className="chub-home container-fluid">
      <div className="row">
        <div className="col-sm-4" data-aos="fade-up-right">
        <Link to="/team">
          <img src="assets/images/chub-team.png" className="img-fluid mx-auto d-block" alt="chub team" width={422} height={422}/>
        </Link>
        </div>
        <div className="col-sm-4 offset-sm-4" data-aos="fade-up-left">
        <Link to="/chubmap">
          <img src="assets/images/Chubmap.png" className="img-fluid mx-auto d-block" alt="chub Map" width={423} height={423}/>
        </Link>   
        </div>
      </div>
      <div className="row pt-80" data-aos="fade-up">
        <div className="col-sm-4 offset-sm-2">
        <Link to="/chublist">
          <img src="assets/images/chub-list.png" className="img-fluid mx-auto d-block" alt="chub List" width={443} height={422}/>
        </Link>
        </div>
        <div className="col-sm-4 offset-sm-2 pt-120" data-aos="fade-up">
        <Link to="/mint">
          <img src="assets/images/chub-Mint.png" className="img-fluid mx-auto d-block" alt="chub Map" width={429} height={429}/>
        </Link>
        </div>
      </div>
    </div>
  </main>
  )
}

export default Home;