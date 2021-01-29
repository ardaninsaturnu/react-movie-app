import logo from '../images/bilyoner.png'

const Header = () => {


  return(
    <div className={`container-fluid`} style={{backgroundColor:"#FFFBD2"}}>


      <div className={`w-75 d-flex align-items-center justify-content-between px-5 flex-wrap mx-auto`}>
        <img src={logo}/>

        <div className={`text-start`}>
          <h3 className={`fs-4`}>Mehmet Arda Çelik</h3>
          <p>Bilyoner Case Study</p>
        </div>
      </div>



    </div>
  )
}

export default Header