import React from 'react';
import CommentItem from './comment_item';

class CommentsShow extends React.Component{

  constructor(props){
    super(props);
  }

  render() {
    if(this.props.comment_ids.length > 0){
      const comment_ids = this.props.comment_ids;
      const comments = this.props.comments;
      return(
          <ul className='comments-container'>
            {
              comment_ids.map((id) =>{
                return(
                  <CommentItem
                    key={id}
                    user={this.props.users[comments[id].user_id]}
                    comment={comments[id]}
                    currentUser={this.props.currentUser}
                    deleteComment={this.props.deleteComment}
                     />
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
