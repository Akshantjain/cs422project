import React from 'react';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function EditDialog(props) {

    return (
        <div>
            <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    {props.children}
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} color="primary">
                        CANCEL
                    </Button>
                    <Button onClick={props.handleSave} color="primary">
                        SAVE
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
