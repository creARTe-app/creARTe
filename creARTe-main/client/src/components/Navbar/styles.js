import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    heading: {
        color: '#0C2D48',
        textDecoration: 'none',
        fontSize: '3em',
        fontWeight: 500,
    },
    image: {
        marginLeft: '10px',
        marginTop: '5px',
        paddingLeft: '30px'
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
        [theme.breakpoints.down('sm')]: {
            width: 'auto',
        },
    },
    profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            width: 'auto',
            marginTop: 20,
            justifyContent: 'center',
        },
    },
    sign: {
        background: '#B94121', //#2E8BC0
        color: 'white'
    },
    logout: {
        marginLeft: '0px',
        background: '#674D22', //#0C2D48
        color: 'white'
    },
    chats: {
        marginLeft: '20px',
        background: '#C67535', //#145DA0
        color: 'white'
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#0C2D48'
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        fontSize: '30'
    },
    purple: {
        color: '#f7fafc', //0C2D48
        backgroundColor: '#66806E', //#B1D4E0
    },
}));