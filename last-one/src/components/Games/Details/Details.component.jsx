import React, { Fragment } from "react";
import parse from "html-react-parser";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";
import { SRLWrapper } from "simple-react-lightbox";
import TextList from "../../Common/Lists/TextList.component";
import StoresList from "../../Common/Lists/StoresList.component";
import Subtitle from "../../Common/Subtitle/Subtitle.component";
import Screenshots from "../Screenshots/Screenshots.component";
import "./Details.styles.scss";
import  { useState, useEffect } from "react";
import Comment from '../../comments/Comment';
import AddComment from "../../comments/AddComment";
import axios from "axios";
import '../../comments/Styles/Comment.scss'
import { ReactComponent as IconReply } from "../../../Assets2/images/icon-reply.svg";
import ReplyComment from "../../comments/ReplyComment";
import DeleteComment from "../../comments/DeleteComment";
import { Button } from "@material-ui/core";
import { ReactComponent as IconDelete } from "../../../Assets2/images/icon-delete.svg";
import { ReactComponent as IconEdit } from "../../../Assets2/images/icon-edit.svg";
import EditComment from "../../comments/EditComment";

const Details = ({
  gameDetails,
  gameScreenshots,
  doneFetchGameScreenshots,
}) => {
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
    background_image,
  } = gameDetails;




  const [replying, setReplying] = useState(false);
  const [edeting, setEdeting] = useState(false);



  let counter = false;
  const [reply_id, setReplyid] = useState()


  const showAddComment = (id) => {
    counter ? setReplying(false) : setReplying(true);
    counter = true;
    setReplyid(id);

  };



  let counter2 = false;
  const [edit_id, setEditid] = useState()
  const showEditComment = (id) => {
    counter2 ? setEdeting(false) : setEdeting(true);
    counter2 = true;
    setEditid(id);

  };

  


  const [data, setData] = useState({

    game_id: id,
    user_id: sessionStorage.getItem('id'),
    game_img:background_image,
    game_name:name,


})
console.log(data);
const [formErrors, setFormErrors] = useState({});


const handleChange = (e) => {
  setData({ ...data, [e.target.name]: e.target.value })
  setFormErrors(validate(data));

}



const showAddFavourite = (e) => {
  e.preventDefault();

  axios.post('http://localhost/ApiRedux/favourite.php', data)

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
    }
    
 
     const handleDelete = (id) => {
   
      axios
        .delete(`http://localhost/ApiRedux/replies.php/${id}/delete`)
        .then(function (response) {
          window.location.reload(false);

        });
       
    };
  

 



  

  const [comments, setComment] = useState([])
  
  const fetchCommentDetail = async (id) => {
    const response = await axios
      .get(`http://localhost/ApiRedux/replies.php/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });

   
      setComment(response.data);
     

  };

  useEffect(() => {
    fetchCommentDetail(id);

  }, [id]);



  
 


  const [posts, setPost] = useState([])
  
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`http://localhost/ApiRedux/comment.php/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });

   
      setPost(response.data);
     

  };

  useEffect(() => {
    fetchProductDetail(id);

  }, [id]);

  


  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item sm={12} md={6}>
          <h1 className="gdetails__title">{name}</h1>
          

          <p className="gdetails__released">
            <span className="font-weight-bold">Release date:</span> {released}
          </p>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextList title="Publisher/s" items={publishers} />
              <TextList title="Genre/s" items={genres} />
              <TextList title="Platform/s" platforms items={platforms} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StoresList stores={stores} />
              <Subtitle text="Rating" />
              <Rating name="read-only" value={rating} readOnly />
            </Grid>
          </Grid>
          <Subtitle text="Description" />
          <div className="gdetails__description">{parse(description)}</div>
        </Grid>
        <Grid item sm={12} md={6}>
          {clip ? (
            <video width="100%" height="350px" controls autoPlay muted>
              <source src={clip.clip} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : null}
          <SRLWrapper>
            <Grid container spacing={1}>
              <Screenshots
                doneFetchScreenshots={doneFetchGameScreenshots}
                screenshots={gameScreenshots}
              />
            </Grid>
          </SRLWrapper>
         
        </Grid>
      </Grid>
       <div style={{Color:'#fff', backgroundColor:'black'}}>
       <form onSubmit={showAddFavourite} >
      <input type='hidden' name="game_id" value={id} onChange={handleChange}></input>
        <input type='hidden' name="user_id" value={sessionStorage.getItem('id')}  onChange={handleChange}></input> 
      <button className="submit" name="submit" style={{color:'black',border:'1px solid #fff',marginBottom:'30px'}}  onClick={() =>
              showAddFavourite({game_id:id,user_id:sessionStorage.getItem('id'),game_img:background_image,game_name:name})
            }>Add To Favourite</button>

</form>
   
      {posts.length > 0
            
          ? posts.map((item)=>
   
           <div key={item.id}>

          <div className="add-comment" style={{display:'flex',flexDirection:'row',marginBottom:'5vh',width:'50%', backgroundColor:'black', color:'#fff'}}>
          
          <img src={item.img} style={{width:'80px', borderRadius:'50%', height:'80px'}}/>
          <div style={{display:'flex',flexDirection:'column'}}>
            <h5 style={{color:'#fff',fontSize:'300'}}>{item.name}</h5 >
            <p style={{color:'#fff'}}>{item.comment}</p>
            <a
            className="reply-btn"
            style={{cursor:'pointer'}}
            onClick={() =>
              showAddComment({ id: item.id})
            }>
        <IconReply /> Reply
      </a>
            </div>
       
       


   </div>
   
     
           
           {comments.length > 0
            
            ? comments.map((comment)=>
    
            {if(comment.post_id===item.id)
              return(
             <div key={comment.id}>
            <div className="add-comment" style={{display:'flex',flexDirection:'row',marginBottom:'2vh',width:'45%',marginLeft:'5%', backgroundColor:'black', color:'#fff',marginTop:'-8vh'}}>
            
            <img src={comment.img} style={{width:'60px', borderRadius:'50%', height:'60px'}}/>
            <div style={{display:'flex',flexDirection:'column'}}>
              <h5 style={{color:'#fff',fontSize:'300'}}>{comment.name}</h5>
              <p style={{color:'#fff'}}>{comment.reply_comment}</p>
              <div style={{display:'flex',flexDirection:'row'}}>
              {comment.user_id==sessionStorage.getItem('id')
      
      ?<a
      type="submit"
      className={`delete-btn`}
      onClick={() =>
        handleDelete(comment.id)
      }>
      <IconDelete /> Delete
    </a>
   :null}

      {(comment.user_id==sessionStorage.getItem('id'))
      ?<a
        className={`edit-btn`}
        style={{cursor:'pointer',paddingRight:'30px'}}
        onClick={() =>
          showEditComment(comment.id)
        }
      >
        <IconEdit /> Edit
      </a>
      :null}
              </div>

    
      </div>
      </div>
      {(edeting && comment.user_id==sessionStorage.getItem('id'))
      
     
      ?<EditComment
        gameDetails={gameDetails}
        reply_comment={comment.reply_comment}
        comment_id={edit_id}
      />
 
    :null}
    
        
        </div>
     
   
      

      ) }
      
        ) : null}

{replying && (
        <ReplyComment
          gameDetails={gameDetails}
          post_id={reply_id}
        
      
        />
      )}

     
      
      </div>

    
          ) : null}
 

 
   
      <AddComment gameDetails={gameDetails} />

      </div>
    </Fragment>
  );
};

export default Details;