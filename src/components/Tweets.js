import React from 'react';

import "../styles/TweetsList.css"

class TweetsListItem extends React.Component {
  render() {
    const tweet = this.props.tweet
    return (
      <div className="TweetsListItem">
        <img
          className="TweetsListItem__avatar"
          src={tweet.avatar}
          alt={`${tweet.username}`}
        />

        <div >
          <strong className="username" >
            {tweet.username}
          </strong>
           @{tweet.nickname} {' - 23m'}
          <br/>                  
          <p className="comment" >{tweet.comment}</p>
          <p className="expand" >Expand</p>
        </div>                         
      </div>
    );
  }
}


function TweetsList(props) {  
  const tweets = props.tweets;  

    return (
      <div className="TweetsList">        

        <ul className="list-unstyled">
          <li>
            <div className="TweetsHeader" >
              Tweets
            </div>
          </li>
          {tweets.map(tweet => {
            return (
              <li key={tweet.id}>                
                  <TweetsListItem tweet={tweet} />                
              </li>
            );
          })}
        </ul>
      </div>
    );  
}

export default TweetsList;
