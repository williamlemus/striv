import React from 'react';
import {Link} from 'react-router-dom';

class CommentItem extends React.Component {


  constructor(props){
    super(props);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
    showDelete: 'hidden'
    };
  }

  handleMouseEnter(e){
    this.setState({showDelete: ''})
  }

  handleMouseLeave(e){
    this.setState({showDelete: 'hidden'})
  }

  handleDelete(e){
    //will handle Delete
    e.preventDefault();
    this.props.deleteComment(this.props.comment);
  }

  render(){
  const comment = this.props.comment;
  const user = this.props.user;
   return(
     <li key={this.props.id} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
       <Link to={'/users/' + comment.user_id}>
         <span>
           <img src={user.image_url} className='profile-pic' />
         </span>
         <span>
           {user.first_name + ' ' + user.last_name}
         </span>
       </Link>
       <span>
         {comment.body}
       </span>
       <span><button className={this.state.showDelete + ' delete-comment'} onClick={this.handleDelete}>X</button></span>
     </li>
   );
  }
}

export default CommentItem;
