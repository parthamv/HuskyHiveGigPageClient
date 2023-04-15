import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { TypeAnimation } from "react-type-animation";

function App() {
  const [responseData, setResponseData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://huskyhiveserver.onrender.com/api/gigs");
        setResponseData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand m-2 h1">
        <TypeAnimation 
      sequence={[
        'HuskyHive Gig List',
        3000,
        ''
        
      ]}
      speed = {1}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      loop={true}  
      style={{  display: 'inline-block'}}
      className="text-light"
    />
          </span>
      </nav>
      <div className="container mt-3">
        <div className="card-columns">
          {responseData &&
            responseData.map((item) => (
              <div key={item._id} className="card bg-dark text-white mt-3">
                <div className="card-body">
                  <h5 className="card-title mb-3">{item.Name}</h5>
                  <h6 className="card-subtitle text-muted">
                    <p>Email ID:{item.emailid}</p>
                   <p> Mobile Number : {item.mobileno}</p>
                  </h6>
                
                  <p className="card-text">Gig: {item.gig}</p>
                  <p className="card-text">Cost: {item.cost}</p>
                 
                </div>
              </div>
            ))}
            {
              responseData.length ==0 && <>
              <div className="card bg-dark text-white mt-3">
                    <div className="card-body">
                      <h5 className="card-title mb-3">Somebody post Something</h5>
                      <h6 className="card-subtitle text-muted">
                        <p>Email ID:SomebodyPostSomething@gmail.com</p>
                       <p> Mobile Number : 1234567890</p>
                      </h6>
                    
                      <p className="card-text">Gig: Post something please</p>
                      <p className="card-text">Cost: free</p>
                     
                    </div>
                  </div>
              </>
            }
        </div>
      </div>
    </>
  );
}

export default App;