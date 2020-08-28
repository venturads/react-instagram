import React from 'react';
import { Input, Button } from '@material-ui/core';

function ImageUpload () {
    const [caption, setCaption] = useState('');
    const [url, setUrl] =useState('');
    const [progress, setProgess] = useState(0);
    const [caption, setCaption] = useStage('');

    return (
        <div>
            <input type="" placeholder="Enter caption..." onChange={event => setCaption(event.target.value)} value={} />
            <input type="file" onChange={handleChange} />
            <Button onClick={handleUpload}>
                Upload
            </Button>
        </div>
    )
}

export default ImageUpload;