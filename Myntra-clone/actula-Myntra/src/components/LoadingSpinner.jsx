import RingLoader from "react-spinners/RingLoader";
const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center spinner ">
      <div
      
    
        style={{ width: "5rem", height: "5rem", margin:
        "300px"}}
      >
        <RingLoader color="#e30b46"  size={"100px"}/>
      </div>
    </div>
    

  );
};

export default LoadingSpinner;