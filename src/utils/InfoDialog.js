import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default function InfoDialog(props) {

    const handleEdit = (e) => {
        props.handleEdit(e);
        props.handleClose();
    }

    const handleDelete = (e) => {
        props.handleDelete(e)
        props.handleClose();
    }

    return (
        <div>
            <Dialog maxWidth='sm' fullWidth={true} onClose={props.handleClose} aria-labelledby="customized-dialog-title" open={props.open}>
                <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
                    {props.data.title}
                </DialogTitle>
                <DialogContent className="EditDialogBox" dividers>
                    {props.children}
                </DialogContent>
                <DialogActions>
                    <Button id={props.data.id} type={props.type} onClick={handleEdit} color="primary">
                        EDIT
                    </Button>
                    <Button id={props.data.id} type={props.type} onClick={handleDelete} color="primary">
                        DELETE
                    </Button>
                    <Button onClick={props.handleClose} color="primary">
                        CLOSE
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
