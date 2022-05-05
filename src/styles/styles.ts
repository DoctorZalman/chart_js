import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    maxWidth: 1080,
    marginTop: 50,
    marginBottom: 50,
    padding: 40,
    background: '#fff',
    borderRadius: 20,
    boxShadow: '-10px 5px 25px rgba(0, 0, 0, 0.2)',
  },
});
