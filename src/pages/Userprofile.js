import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import Modal from './Modal';
import './modal.css'

function Userprofile() {

  const [isOpen, setIsOpen] = useState(false)
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




  


const goGame = async (id) => {
  window.open(`/games/details/${id}`,"_self")  
   

};



const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(4);



  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = Favourites.slice(indexOfFirstPost, indexOfLastPost);


  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(Favourites.length / postsPerPage); i++) {
      pageNumbers.push(i);
  }






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

<div className='modal-btn'>
   <button onClick={() => setIsOpen(true)}>Your Posts</button>
<Modal ProfilePosts={ProfilePosts} open={isOpen} onClose={() => setIsOpen(false)}/>
</div>
{/* 
<h1 style={{color:'#fff',textAlign:'center',marginRight:'50px'}}>Your Posts</h1>
<div style={{display:'flex',flexWrap:'wrap',marginLeft:'10%'}}>

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
</div> */}
<div>
<h1 style={{color:'#fff',textAlign:'center',marginTop:'10vh'}}>Your Favourites</h1>
<div style={{marginBottom:'5vh', display:'flex',marginLeft:'10%' }}>
{currentPosts.length > 0
            
            ? currentPosts.map((fav)=>
<div>
<div className="card" style={{width: '18rem',height:'350px',margin:'20px',backgroundColor:'black'}}>
  <img src={fav.game_img} className="card-img-top" alt="..." />
  <div className="card-body">
    <div style={{height:'100px'}}>
    <h5 className="card-title" style={{color:'#fff'}}>{fav.game_name}</h5>
    </div>
    <button onClick={()=>goGame(fav.game_id)} className="form-control btn btn-light submit px-3" style={{marginBottom:'10px'}}>See The Game</button>
  </div>
</div>

</div>
       
      
        ) : null}


</div>
</div>

<ul className='pagination justify-content-center' style={{marginLeft:'0'}}>
                    {pageNumbers.map(number => (
                        <li key={number} className='page-item'>
                            <button onClick={() => paginate(number)} className='page-link'>
                                {number}
                            </button>
                        </li>
                    ))}
                </ul>



</>
  
    );
  }
  
  export default Userprofile;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
