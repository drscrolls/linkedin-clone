import React, { useState, useEffect } from 'react'
import "./Feed.css";
import InputOption from './InputOption';
import Post from '../Post/Post';
import PhotoIcon from '@mui/icons-material/Photo';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ArticleIcon from '@mui/icons-material/Article';
import EventIcon from '@mui/icons-material/Event';
import CreateIcon from '@mui/icons-material/Create';
import { db } from '../../firebase';

function Feed() {


    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        db.collection("posts").oneSnapshot((snapshot) => 
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        );
    }, []);

    
    const sendPost = (e) => {
        e.preventDefault();
    }
    
    

  return (
    <div className="feed">
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form>
                    <input type="text" />
                    <button type="submit" onClick={sendPost}>Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption title="Photo" icon={PhotoIcon} color="#70b5f9" />
                <InputOption title="Video" icon={VideoLibraryIcon} color="#7fc15e" />
                <InputOption title="Event" icon={EventIcon} color="#e7a33e" />
                <InputOption title="Write article" icon={ArticleIcon} color="#fc9295" />
            </div>
        </div>



        {/* Posts */}
        {posts.map((post) => {
            <Post/>
        })}
        
        <Post name="Andrew Nickson" 
        description="This is a test"
        message="Wow this worked" />
    </div>

  )
}

export default Feed
