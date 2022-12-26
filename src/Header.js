import { Link } from "react-router-dom"
function Header() {
  return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand"></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mz-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                <Link to="/" className="nav-link" >About</Link>
                </li>
                <li className="nav-item">
                <Link to="/" className="nav-link">Whishper</Link>
                </li>
              </ul>
              <div className="">
                <ul className="navbar-nav align-items-center">
                  <li className="nav-item">
                  <Link to="/" className="nav-link"><img src="assets/images/twitter.svg" alt="Twitter" width={40} height={33}/></Link>
                  </li>
                  <li className="nav-item">
                  <Link to="/" className="nav-link"><img src="assets/images/discord.svg" alt="Discord" width={40} height={33}/></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
  )
}

export default Header;
