import { useState } from "react";
import axios from 'axios';
import "./Styles/AddComment.scss";

const AddComment = ({gameDetails, addComments, replyingTo }) => {
  const {
    id,
    name,
    description,
    released,
    rating,
    platforms,
    stores,
    publishers,
    genres,
    clip,
 
  } = gameDetails;


  // const game_id =game_id;
  const [formErrors, setFormErrors] = useState({});
  const [data, setData] = useState({
      comment: "",
      game_id: id,
      user_id: sessionStorage.getItem('id'),
      game_name: name,

  })

  // const user_id= sessionStorage.getItem('id');

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    setFormErrors(validate(data));

}

const submitForm = (e) => {
    e.preventDefault();


    axios.post('http://localhost/ApiRedux/comment.php', data)

        .then((result) => {
          
         window.open(`/games/details/${id}`,"_self")
     

        console.log(result);
    
      
        })


}


const validate = (values) => {
  const errors = {};
  if (!values.camment) {
      errors.camment = "camment is required";
  } 


  return errors;
};



  return (
    <div className="add-comment" style={{backgroundColor:'black'}}>
          <img src={'https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0'} style={{width:'80px', borderRadius:'50%', height:'80px'}}/>
      <form onSubmit={submitForm} >
        <input type='hidden' name="game_id" value={id}></input>
        <input type='hidden' name="user_id" value={sessionStorage.getItem('id')}></input>
        <input type='hidden' name="game_name" value={name}></input>


        
      <textarea
      style={{width:'40vw'}}
        className="comment-input"
        placeholder="Add a comment"
        onChange={handleChange}
        name="comment"
      />
      <div className="send-btn-container">
        <div className="profile-pic"></div>
        <button type="submit" className="add-btn">
          send
        </button>
      </div>
      </form>
    </div>
  );
};

export default AddComment;
