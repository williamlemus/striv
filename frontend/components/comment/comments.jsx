import React from 'react';
import {Link} from 'react-router-dom';

class CommentsShow extends React.Component{

  render() {
    if(this.props.comment_ids.length > 0){
      const comment_ids = this.props.comment_ids;
      const comments = this.props.comments;
      return(
          <ul className='comments-container'>
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
