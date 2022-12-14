import { useState } from "react";
import axios from 'axios';
import '../Login/css/style.css'

const Register = () => {

    const [formErrors, setFormErrors] = useState({});
    const [data, setData] = useState({
        email: "",
        name: "",
        pass: "",
        role:"",
    })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        setFormErrors(validate(data));

    }



    const submitForm = (e) => {
        e.preventDefault();


        axios.post('http://localhost/ApiRedux/reg.php', data)

            .then((result) => {
             window.open("/","_self")

            console.log(result);
        
          
            })


    }




    const validate = (values) => {
        const errors = {};
        const regex =
            /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;

        if (!values.email) {
            errors.email = "Email is required";
        } else if (!regex.test(values.email)) {
            errors.email = "Please enter a valid email";
        }

        const pregex = /^[0-9]*$/;


        if (!values.pass) {
            errors.pass = "Password is required";
        } else if (values.pass.length < 7) {
            errors.pass = "Password must be 8 characters or more";
        } else if (values.pass.length > 12) {
            errors.pass = "Password must be 12 characters or less";
        }
        return errors;
    };

    return (
        <div class="img js-fullheight">
            <br /><br /><br /><br />
          
            <section class="ftco-section">
		<div class="container">
		
                    
        <div class="row justify-content-center">
		<div class="col-md-6 col-lg-4">
		<div class="login-wrap p-0">
		<h3 class="mb-4 text-center">Register</h3>
        <form onSubmit={submitForm}  >
        <div className="row mb-3">{/* Email  */}


        <div className="col-md-12">
        <input id="name" type="text"
        className="form-control @error('name')" name="name" 
        onChange={handleChange}
        value={data.name} placeholder='name'/>
        <p className="errors">{formErrors.name}</p>
       </div>

       </div>

        <div className="row mb-3">{/* Email  */}

         <div className="col-md-12">
         <input id="email" type="email" className="form-control @error('email')" name="email" onChange={handleChange} value={data.email} placeholder='email'/>
           <p className="errors">{formErrors.email}</p> </div>

        </div>





        <div className="row mb-3">{/* Password  */}
                                                 
        <div className="col-md-12">

        <input id="pass" type="password" className="form-control"  name="pass"  onChange={handleChange} value={data.pass}  placeholder='password' />
        <p className="errors">{formErrors.pass}</p>
        </div>

         </div>





        <div className="row mb-0">
        <div className="col-md-6 offset-md-4">
        <button type="submit"  class="form-control btn btn-light submit px-3" style={{marginLeft:'-40px', borderColor:"white"}}>
           Register
        </button>
        </div>
         </div>




        </form>

        </div>
        </div>
        </div> 
        </div>
        </section>
           
    
        </div>
    )
}
export default Register