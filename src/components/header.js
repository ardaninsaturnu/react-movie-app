import logo from "../images/bilyoner.png"


const Header = () => {

    return(


        <>
    <div className={`container-fluid g-0 h-100 bg-warning text-center`}>
        <img src={logo}/>
    </div>

    <nav style={{backgroundColor:'#16971B'}} aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a className="text-white" href="#">Library</a></li>
        <li className="breadcrumb-item text-white active" aria-current="page">Movie</li>
      </ol>
    </nav>
  </>


    )

}

export default Header;


