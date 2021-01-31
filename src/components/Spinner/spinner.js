import spinner from "../../images/Spinner-1s-200px.gif"


const Spinner = (props) => {

  return(

    <div>
      <img src={spinner} className="mx-auto d-block" width={200} alt="spinner"/>
    </div>

  )

}

export default Spinner