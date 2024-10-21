import { useState } from "react";

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);

  // const toggleAlert = () => {
  //   if (showAlert) {
  //     setShowAlert(false)
  //   } else {
  //     setShowAlert(true);
  //   }
  // }

  return (
    <div>
      <button className="btn btn-danger" onClick={()=> setShowAlert(!showAlert) } >Toggle </button>
      {showAlert && <Alert/>}
    </div>
  )
};


const Alert = () => {
  return <div className="alert alert-danger"> Hello World </div>

}




export default ToggleChallenge;
