import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';

function SignUp() {
    return (
        <Modal
        open={open}
        onClose={() => setOpen(false)}
        >
        <div style={modalStyle} className={classes.paper}>
            <h2>My Modal</h2>
        </div>
    </Modal>
    )
}

export default SignUp;