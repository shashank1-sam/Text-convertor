export default function Navbar(props) {
  return (
   <>
   <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode} m-0 p-0 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.Brand}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{"--bs-scroll-height": "100px"}}>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.Home}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">{props.About}</a>
        </li>
      
      
      </ul>

      <div className={`form-check form-switch ${props.mode === 'dark' ? 'light' : 'dark'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label" htmlFor="switchCheckDefault">Enable {props.mode === 'dark' ? 'Light' : 'Dark'} Mode</label>
</div>
    </div>
  </div>
</nav>
   </>
        )
        }

    

    //   As of react 19 support of propsType has been completely removed  from the react package   
    //  Navbar.propTypes={
    //     Brand:PropTypes.string,
    //     Home:PropTypes.string,
    //     About:PropTypes.string,
    //     Actions:PropTypes.string,
    //     ActionOne:PropTypes.string,
    //     AnotherAction:PropTypes.string,
    //     SomethingElseHere:PropTypes.string,
    //     Contact:PropTypes.string,
    //  } 
   
    // default props has been deprecated for functional components in react 19 and above
    //  Navbar.defaultProps={
    //     Brand:"Here will be logo",
    //     Home:"Home",
    //     About:"About Us",
    //     Actions:"Actions",  
    //     ActionOne:"Action One",
    //     AnotherAction:"Another action",
    //     SomethingElseHere:"Something else here",
    //     Contact:"Contact",
    //  }  