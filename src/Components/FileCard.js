import React from 'react'
import './FileCard.css'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

function FileCard({ name }) {
    return (
        <div className="fileCard">
            <div className="fileCardTop">
                <InsertDriveFileIcon style={{ fontSize: 130 }} />
            </div>

            <div className="fileCardBottom">
                <p>{name}</p>
            </div>
        </div>
    )
}

export default FileCard
