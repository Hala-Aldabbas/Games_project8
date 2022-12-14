import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function Userprofile() {


    // const navigate = useNavigate();

    const [inputs, setInfo]=useState({
      name:"",
      email:"",
      mobile:"",
      location:''
  }) 


   
  const id = sessionStorage.getItem("id");

    useEffect(() => {
        getUser();
    }, []);

    function getUser() {
      axios.get(`http://localhost/ApiRedux/user.php/${id}`)
      .then(function(response) {
          setInfo(response.data);
      });
  }
  console.log(id)


  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInfo(values => ({...values, [name]: value,id:sessionStorage.getItem('id')}));
}
const handleSubmit = (e) => {
    
    e.preventDefault();
    axios.put(`http://localhost/ApiRedux/user.php`,inputs).then(function(response){
        // navigate('/Userprofile');

    });
    window.location.reload(false);

}


    
    const [ProfilePosts,setProfilePosts]=useState([])
  
  const fetchCommentDetail = async (id) => {
    const response = await axios
      .get(`http://localhost/ApiRedux/Profile.php/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });

   
      setProfilePosts(response.data);
     

  };

  useEffect(() => {
    fetchCommentDetail(id);

  }, [id]);





  const [Favourites,setFavourites]=useState([])
  const fetchFavouriteDetail = async (id) => {
    const response = await axios
      .get(`http://localhost/ApiRedux/favourite.php/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });

   
      setFavourites(response.data);
      
  };

  useEffect(() => {
    fetchFavouriteDetail(id);

  }, [id]);

console.log(Favourites)




  






    return (
<>
<br/><br/><br/><br/><br/><br/>
<div className="container  mt-5" style={{marginBottom:'20vh'}}>
<h2 className='mb-4'>Your Profile</h2>
  <div className="main-body">
    <div className="row">
      <div className="col-lg-8">
        <div className="card">
          <div className="card-body">



            <form onSubmit={handleSubmit} className="container">



{/* id */}
<div className="row mb-3">
                <div className="col-sm-3">
                    {/* {inputs.id} */}
                  <h6 className="mb-0">User Id</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input disabled className="form-control" placeholder={inputs.id}  style={{color:'black',backgroundColor:'black'}}/>
                </div>
              </div>

{/* Name */}
<div className="row mb-3">
                <div className="col-sm-3">
                    {/* {inputs.name} */}
                  <h6 className="mb-0">Name</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input required name="name" type="text" className="form-control"  placeholder={inputs.name}   onChange={handleChange}/>
                </div>
              </div>

            
{/* Email */}             
<div className="row mb-3">
                <div className="col-sm-3">
                    {/* {inputs.email} */}
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input required name="email" type="email" className="form-control" placeholder={inputs.email}  onChange={handleChange}/>
                </div>
              </div>


{/* Phone */}              
<div className="row mb-3">
                <div className="col-sm-3">
                    {/* {inputs.mobile} */}
                  <h6 className="mb-0">Phone</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input required name="mobile" type="text" className="form-control" placeholder={inputs.mobile}  onChange={handleChange}/>
                </div>
              </div>

{/* location */}              
<div className="row mb-3">
                <div className="col-sm-3">
                    {/* {inputs.location} */}
                  <h6 className="mb-0"> location</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input required name="location" type="text" className="form-control" placeholder={inputs.location}     onChange={handleChange}/>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3" />
                <div className="col-sm-9 text-secondary">
                  <button type="submit" className="btn btn-light px-4" >Save Changes</button>
                </div>
              </div>


            </form>


            </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-column align-items-center text-center"> <br /> <br />
              <img src={inputs.img} alt="Admin" className="rounded-circle p-1 bg-primary" width={110} />
              <div className="mt-3">
                <br />
                
                <br />
              </div>
            </div>
            <hr className="my-2" />
            <br/>
            <div className="row">
              <div className="col-lg-6">
                <label>Registration Date : </label>
              </div>
              <div className="col-lg-6">
                <p className="text-secondary mb-1">{inputs.created_at}</p>
              </div>
              <br/><br/><br/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<h1 style={{color:'#fff',textAlign:'center',marginRight:'50px'}}>Your Posts</h1>
<div style={{display:'flex',flexWrap:'wrap'}}>
 
{ProfilePosts.length > 0
            
            ? ProfilePosts.map((comment)=>
       
             <div key={comment.id} style={{}}>
            <div className="add-comment" style={{display:'flex',flexDirection:'row',marginBottom:'5vh',width:'35vw',marginRight:'5vw', backgroundColor:'black', color:'#fff',marginTop:'0',border:'1px solid #B7CADB',boxShadow:' 0 0 19px 10px rgb(226 30 228 / 24%)',height:'auto'}}>
            
            <img src={comment.img} style={{width:'60px', borderRadius:'50%', height:'60px'}}/>
            <div style={{display:'flex',flexDirection:'column'}}>
              <h5 style={{color:'#fff',fontWeight:'800'}}>{comment.name}</h5>
              <p style={{color:'#fff',fontSize:'15px'}}>{comment.comment}</p>
            

      </div>
      </div>
        </div>
      
        ) : null}
</div>
<div>
<h1 style={{color:'#fff',textAlign:'center',marginTop:'10vh'}}>Your Favourites</h1>
<div style={{marginBottom:'5vh', display:'flex', }}>
{Favourites.length > 0
            
            ? Favourites.map((fav)=>
<div>
<div className="card" style={{width: '18rem',height:'350px',margin:'20px',backgroundColor:'black'}}>
  <img src={fav.game_img} className="card-img-top" alt="..." />
  <div className="card-body">
    <div style={{height:'100px'}}>
    <h5 className="card-title" style={{color:'#fff'}}>{fav.game_name}</h5>
    </div>
    <a href="#" className="btn btn-primary" style={{marginBottom:'10px'}}>Go somewhere</a>
  </div>
</div>

</div>
       
      
        ) : null}


</div>
</div>






</>
  
    );
  }
  
  export default Userprofile;