import { useState } from "react";
import axios from 'axios';
import "./Styles/AddComment.scss";
import { ReactComponent as IconDelete } from "../../Assets2/images/icon-delete.svg";
 
const DeleteComment = (post_id,user_id) => {

 console.log(post_id);


  const handleDelete = async (id) => {
   
     await axios
      .delete(`http://localhost/ApiRedux/replies.php/${post_id.id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });

    }
  
  
    return(


    <button
    className={`delete-btn`}
    onClick={handleDelete}
  >
    <IconDelete /> Delete
  </button>
)

}
export default DeleteComment





