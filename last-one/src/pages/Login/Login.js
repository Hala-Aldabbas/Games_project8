import { useState } from "react";
import axios from 'axios';
import '../register/Register.css'
import './css/style.css'
// import { useNavigate } from "react-router-dom";


const Login = () => {
    // const navigation = useNavigate();
    const [formErrors, setFormErrors] = useState({});
    const [data, setData] = useState({
        email: "",
        password: "",
        role:"",
    })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        setFormErrors(validate(data));

    }



    const submitForm = (e) => {
        e.preventDefault();


        axios.post('http://localhost/ApiRedux/login.php', data)

            .then((result) => {
                // console.log(result.data);
                // console.log(result.data[0].role)

                if (result.data.length == 0) {
                    const elem = document.getElementById("errorMassage");
                    elem.innerHTML = "Invalied Email and Password";

                } else if (result.data.length !== 0 && result.data[0].role === 'user') {

                    sessionStorage.setItem('username', result.data[0].name);
                    sessionStorage.setItem('useremail', result.data[0].email);
                    sessionStorage.setItem('id', result.data[0].id);
                    sessionStorage.setItem('role', result.data[0].role);

                    // navigation('/');
                    window.open("/","_self")




                } else if (result.data.length !== 0 && result.data[0].role === 'admin') {

                    sessionStorage.setItem('username', result.data[0].name);
                    sessionStorage.setItem('useremail', result.data[0].email);
                    sessionStorage.setItem('id', result.data[0].id);
                    sessionStorage.setItem('role', result.data[0].role);


                    // navigate('/blogs');


                } else {
                    // navigate('/Signup');
                }
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


        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 7) {
            errors.password = "Password must be 8 characters or more";
        } else if (values.password.length > 12) {
            errors.password = "Password must be 12 characters or less";
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
		      	<h3 class="mb-4 text-center">Have an account?</h3>
                            
                                            <form onSubmit={submitForm}  class="signin-form">


                                                <div class="form-group">{/* Email  */}

                                                
                                                        <input id="email" type="email"
                                                            className="form-control @error('email')" name="email" 
                                                            onChange={handleChange}
                                                            value={data.email} placeholder='Email'/>
                                                        <p className="errors">{formErrors.email}</p>

                                                </div>





                                                <div className="form-group">{/* Password  */}

                                                        <input id="password" type="password"
                                                            className="form-control"
                                                            name="password" 
                                                            onChange={handleChange}
                                                            value={data.password}
                                                            placeholder='password'
                                                        />
                                                        <p className="errors">{formErrors.password}</p>

                                                </div>

                                                <div className="row mb-0">
                                                    <div className="col-md-6 offset-md-4">
                                                        <button type="submit" class="form-control btn btn-light submit px-3"  style={{marginLeft:'-40px'}}>
                                                            Login
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
export default Login