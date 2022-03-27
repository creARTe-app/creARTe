import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  outer: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem'

  },
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '1.5rem',
  },
  heading: {
    display: 'flex',  
  },
  row: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '600px',
    display: 'flex',  
    justifyContent: 'space-between',
    width: '60vh',

  },
  name: {

  },
  email: {

  },
}));
