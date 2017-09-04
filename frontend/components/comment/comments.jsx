import React from 'react';
import {Link} from 'react-router-dom';

class CommentsShow extends React.Component{

  constructor(props){
    super(props);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      showDelete: 'hidden'
    }
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
 
  }


  render() {
    if(this.props.comment_ids.length > 0){
      const comment_ids = this.props.comment_ids;
      const comments = this.props.comments;
      return(
          <ul className='comments-container' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            {
              comment_ids.map((id) =>{
                return(
                <li key={id}>
                  <Link to={'/users/' + this.props.users[comments[id].user_id].id}>
                    <span>
                      <img src={this.props.users[comments[id].user_id].image_url} className='profile-pic' />
                    </span>
                    <span>
                      {this.props.users[comments[id].user_id].first_name + ' ' + this.props.users[comments[id].user_id].last_name}
                    </span>
                  </Link>
                  <span>
                    {comments[id].body}
                  </span>
                  <span><button className={this.state.showDelete + ' delete-comment'} onClick={this.handleDelete}>X</button></span>
                </li>
              );
              })
            }
          </ul>
      );
    }
    return(null);
  }

}

export default CommentsShow;
