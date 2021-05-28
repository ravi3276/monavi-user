import React from 'react'
import './Post.css';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';

function Post() {
    return (
        <div className="post">
        <div className="post__header">
        <div className="post__left">
            <div className="post__lefttop">
            <h5>Notice</h5>
            <h5>Latest Post</h5>
            </div>

            <div className="post__leftbody">
                <div className="post__leftbodyguide">
                <InsertDriveFileOutlinedIcon className="icon"/>
                <small>
                <a href="">Update</a>

                Guide to earning Game Point due to bulletin board ov
                </small>
                </div>

                <div className="post__leftbodyguide">
                <InsertDriveFileOutlinedIcon className="icon"/>
                <small>
                <a href="">Update</a>

                Guide to earning Game Point due to bulletin board ov
                </small>
                </div>

                <div className="post__leftbodyguide">
                <InsertDriveFileOutlinedIcon className="icon"/>
                <small>
                <a href="">Update</a>

                Guide to earning Game Point due to bulletin board ov
                </small>
                </div>

                <div className="post__leftbodyguide">
                <InsertDriveFileOutlinedIcon className="icon"/>
                <small>
                <a href="">Update</a>

                Guide to earning Game Point due to bulletin board ov
                </small>
                </div>
            </div>

        </div>

        <div className="post__right">
        <div className="post__righttop">
        <h5>Popular Post</h5>
        <h5>Freedom</h5>
        <h5>Humor</h5>
        </div>

        <div className="post__rightinnerguide">
        <p>
        1 st[Freedom] Who will be friends with me Telegram~^^ Go!
        </p>
        <p>
        2nd place[Free] Attendance.
        </p>
        <p>
        3rd place[Freedom] Exodus
        </p>
        <p>
        No. 4
        </p>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Post
