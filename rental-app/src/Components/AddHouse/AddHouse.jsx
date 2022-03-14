import { useState } from "react";

export const AddHouse = ()=> {
    
    const [details, setHouse] = useState ({
        name: "",
        ownerName: "",
        address: "",
        areaCode: "",
        rent: "",
        bachelor: "",
        married: ""
    });

    const handleChange = (e) => {
        setHouse({...details, [e.target.name]: e.target.value});
    }
    
    const submit = ()=>{
        try {
            fetch("http://localhost:8080/houses", {
                method: "POST",
                body: JSON.stringify(details),
                header: {
                    "content-type": "application/json",
                },
            });
        }
        catch (e) {
            console.log(e.message);
        }
    }


    return (
      <div className="addHouseContainer">
        <form>
          <label>name</label>
          <input type="text" className="name" value={details.name} required onChange={(e) => handleChange(e)}/>
          <br />
          <label>ownerName</label>
          <input value={details.ownerName} type="text" className="ownerName" required onChange={(e) => handleChange(e)}/>
          <br />
          <label>address</label>
          <input value={details.address} type="text" className="address" required onChange={(e) => handleChange(e)}/>
          <br />
          <label>areaCode</label>
          <input value={details.areaCode} type="text" className="areaCode" required onChange={(e) => handleChange(e)}/>
          <br />
          <label>rent</label>
          <input value={details.rent} type="text" className="rent" required onChange={(e) => handleChange(e)}/>
          <br />
          <label>preferredTenant</label>
          <br />
          <label>bachelor</label>
          <input checked={details.bachelor} type="checkbox" className="bachelor" onChange={(e) => handleChange(e)}/>
          <br />
          <label>married</label>
          <input checked={details.married} type="checkbox" className="married" onChange={(e) => handleChange(e)}/>
          <br />
          <input className="submitBtn" type="submit" onClick={submit}/>
        </form>
      </div>
    );
}