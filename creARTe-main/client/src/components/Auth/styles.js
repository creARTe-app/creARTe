import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: '#0C2D48',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        backgroundColor: '#C67535',
        color: 'white',
        margin: theme.spacing(3, 0, 2),
    }
}));