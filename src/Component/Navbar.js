export default function Navbar(props) {
  return (
   <>
   <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
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
          <a className="nav-link" href="/">{props.About}</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {props.Actions}
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">{props.ActionOne}</a></li>
            <li><a className="dropdown-item" href="/">{props.AnotherAction}</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/">{props.SomethingElseHere}</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true" href="/">{props.Contact}</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
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