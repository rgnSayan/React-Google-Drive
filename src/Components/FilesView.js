import React, { useState, useEffect } from 'react'
import db from '../firebase'
import FileCard from './FileCard'
import FileItem from './FileItem'
import './FilesView.css'

function FilesView() {

    const [files, setFiles] = useState([])

    useEffect(() => {
        db.collection('myFiles').onSnapshot(snapshot => {
            setFiles(snapshot.docs.map(
                doc => ({
                    id: doc.id,
                    item: doc.data()
                })))
        })
    }, [])

    return (
        <div className="fileView">
            <div className="fileView__row">
                {
                    files.slice(0, 5).map(({ id, item }) => (
                        <FileCard name={item.caption} />
                    ))
                }

            </div>
            <div className="fileView__titles">
                <div className="fileView__titlesLeft">
                    <p>name</p>
                </div>
                <div className="fileView__titlesRight">
                    <p>Last modified</p>
                    <p>Files size</p>
                </div>
            </div>

            {files.map(({ id, item }) => (
                <FileItem
                    id={id}
                    caption={item.caption}
                    fileURL={item.fileURL}
                    size={item.size}
                    timestamp={item.timestamp}
                />
            )
            )}

        </div>
    )
}

export default FilesView
