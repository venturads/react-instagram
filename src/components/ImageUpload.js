import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import firebase from '../firebase';
import { storage, db } from '../firebase';
import '../styles/ImageUpload.css';

function ImageUpload ({username}) {
    const [caption, setCaption] = useState('');
    const [url, setUrl] =useState('');
    const [progress, setProgess] = useState(0);
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // progress function ...
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 1000
                );
                setProgess(progress);
            },
            (error) => {
                // error function 
                console.log(error);
                alert(error.message);
            },
            () => {
                // complete function
                storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    // post image
                    db.collection("posts").add({
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        caption: caption,
                        imageUrl: url,
                        username: username,
                    });
                });
            setProgess(0);
            setCaption('');
            setImage(null);
            }
        );
    };

    return (
        <div className="imageupload">
            <progress
            className="imageupload_progress"
            value={progress}
            max="100" />
            <input
            type=""
            placeholder="Enter caption..."
            onChange={event => setCaption(event.target.value)}
            value={caption}
            required
            />
            <input type="file" onChange={handleChange} />
            <Button onClick={handleUpload}>
                Upload
            </Button>
        </div>
    )
}

export default ImageUpload;