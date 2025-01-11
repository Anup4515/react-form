import { useState } from 'react'

import './App.css'

function App() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [mail, setmail] = useState("");
  const [contact, setcontact] = useState("");
  const [gender, setgender] = useState("");
  
  const [about, setabout] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
     // Prevents the default form submission behavior
    console.log("Form Data:");
    console.log("First Name:", firstname);
    console.log("Last Name:", lastname);
    console.log("Email:", mail);
    console.log("Contact:", contact);
    console.log("Gender:", gender);
    console.log("About:", about);
    setfirstname("");
        setlastname("");
        setmail("");
        setcontact("");
        setgender("");
        setabout("");
  };
  return (
    <>
      <div className='container'>
        <h1>Form in React</h1>
        <form onSubmit={handleSubmit}>
        
          <label>
            First Name
          </label><br />
          <input className='input'
            type="text"
            value={firstname}
            onChange={(e) =>
              setfirstname(e.target.value)
            }
            placeholder="Enter First Name"
            required
          /><br />

          <label>
            Last Name
          </label><br />
          <input className='input'
            type="text"
            value={lastname}
            onChange={(e) =>
              setlastname(e.target.value)
            }
            placeholder="Enter Last Name"
            required
          /><br />

          <label>
            Email
          </label><br />
          <input className='input'
            type="text"
            value={mail}
            onChange={(e) =>
              setmail(e.target.value)
            }
            placeholder="Enter e-mail"
            required
          /><br />

          <label>
            Contact
          </label><br />
          <input className='input'
            type="text"
            value={contact}
            onChange={(e) =>
              setcontact(e.target.value)
            }
            placeholder="Enter Phone number"
            required
          /><br />

          <label >Gender</label><br />
          <input
            type="radio"
            value="male"
            id="male"
            checked={gender === "male"}
            onChange={(e) =>
              setgender(e.target.value)
            }

          />
          Male

          <br />
          <input
            type="radio"
            value="female"
            id="female"
            checked={gender === "female"}
            onChange={(e) =>
              setgender(e.target.value)
            }

          />
          Female
<br/>
<label>About</label><br/>
<textarea type='text'
className='about'
value = {about}
onChange={(e) =>
  setabout(e.target.value)}
></textarea>
          <br />
          <input type='submit'></input>




        
        </form>
      </div>
      
    </>

  )
}

export default App
