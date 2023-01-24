import React from 'react';
import userImage from "./elliot.jpg";

const UserComment = (props) =>{
    return(
        <div class="ui comments">
        <div class="comment">
          <a class="avatar">
            <img src={userImage}/>
          </a>
          <div class="content">
            <a class="author">{props.userName}</a>
            <div class="metadata">
              <div class="date">{props.date}</div>
              <div class="rating">
                <i class="star icon"></i>
               {props.fav}
              </div>
            </div>
            <div class="text">
             {props.comment}
            </div>
          </div>
        </div>
      </div>
    )
}

export default UserComment