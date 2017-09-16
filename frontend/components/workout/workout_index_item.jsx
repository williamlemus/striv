import React from 'react';
import { Link } from 'react-router-dom';
import WorkoutMap from './workout_map';
import CommentsShowContainer from '../comment/comments_container';


class WorkoutIndexItem extends React.Component {

  constructor(props){
    super(props);
    this.toggleCommentBox = this.toggleCommentBox.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.postComment = this.postComment.bind(this);
    this.state = {
      showComment: false,
      textarea: ''
    }
  }

  toggleCommentBox(){
    this.setState({showComment: !this.state.showComment});
  }

  handleInput(e){
    this.setState({textarea: e.target.value});
  }

  postComment(e){
    const comment = {};
    comment.body = this.state.textarea;
    comment.workout_id = this.props.workout.id;
    this.props.addComment(comment)
      .then(this.setState({textarea: ''}));
  }

  render() {
    const user = this.props.users[this.props.workout.user_id];
    const route = this.props.routes[this.props.workout.route_id];
    if(this.props.workout instanceof Array){
      return null;
    } else {
      return(
        <div className='workout-index-item'>
          <div className='workout-feed-item-info'>
            <div className='workout-pic-container'>
              <Link to={'/users/' + user.id}>
                <img className='workout-feed-img' src={user.image_url} />
              </Link>
            </div>
            <div className="workout-info-container">

              <span>
                <Link to={'/users/' + user.id}>
                  {user.first_name + ' ' + user.last_name}
                </Link>
              </span>
              <span className='workout-date'>
                {new Date(this.props.workout.start_datetime).toLocaleString()}
              </span>

              <span className='workout-index-title'>
                <Link to={'/workouts/' + this.props.workout.id}>{this.props.workout.title}</Link>
              </span>
              <span className='workout-index-distance'>
                {route.distance/1000}km
              </span>
              <span>
                <button onClick={this.toggleCommentBox}>&#x1f4ac;</button>
              </span>
            </div>
            <div>
              <WorkoutMap polyline={route.polyline} workoutid={this.props.workout.id} />
            </div>
        </div>
          <div>
            <CommentsShowContainer comment_ids={this.props.workout.comment_ids} workout_id={this.props.workout.id} />
          </div>
          <div className={'comments-container ' + (this.state.showComment ? '' : ' hidden')}>
            <span>
              <img src={this.props.currentUser.image_url} className='profile-pic' />
            </span>
            <span>
              <textarea onInput={this.handleInput} value={this.state.textarea}></textarea>
              <button onClick={this.postComment}>Post</button>
            </span>
          </div>
      </div>);
    }
  }
}

export default WorkoutIndexItem;
