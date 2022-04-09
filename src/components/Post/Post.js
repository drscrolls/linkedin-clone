import React from 'react'
import { Avatar } from '@mui/material';
import "./Post.css";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import SendIcon from '@mui/icons-material/Send';
import InputOption from '../Feed/InputOption';

function Post({ name, description, message, photoUrl}) {
  return (
    <div className="post">
      <div className="post__header">
          <Avatar src={photoUrl} />
          <div className="post__info">
              <h2>{name}</h2>
              <p>{description}</p>
          </div>
      </div>

      <div className="post__body">
          <p>{message}</p>
      </div>

      <div className="post__buttons">
          <InputOption icon={ThumbUpOffAltIcon} title="Like" color="gray" />
          <InputOption icon={ChatBubbleOutlineIcon} title="Comment" color="gray" />
          <InputOption icon={ShortcutIcon} title="Share" color="gray" />
          <InputOption icon={SendIcon} title="Send" color="gray" />
      </div>
    </div>
  )
}

export default Post
