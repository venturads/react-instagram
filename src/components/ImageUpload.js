import React, {useState} from 'react';
import { Input, Button } from '@material-ui/core';

function ImageUpload () {
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

    };

    return (
        <div>
            <input type="" placeholder="Enter caption..." onChange={event => setCaption(event.target.value)} value={caption} />
            <input type="file" onChange={handleChange} />
            <Button onClick={handleUpload}>
                Upload
            </Button>
        </div>
    )
}

export default ImageUpload;