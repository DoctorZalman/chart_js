import { makeStyles } from '@mui/styles';
// Photos styles

export const useStyles = makeStyles((theme) => {
  console.log(theme);

  return {
    filterButton: {
      paddingTop: 20,
      paddingBottom: 20,
    },
    button: {
      fontSize: '0.7rem !important',
    },
  };
});
