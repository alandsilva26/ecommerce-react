import { Snackbar, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface IProps {
  snackbarOpen: boolean;
  handleSnackbarClose: () => void;
}

const SnackbarNotif = ({
  snackbarOpen,
  handleSnackbarClose,
}: IProps): JSX.Element => {
  const action = (
    <>
      {/* <Button color="secondary" size="small" onClick={handleSnackbarClose}>
        UNDO
      </Button> */}
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleSnackbarClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <Snackbar
      open={snackbarOpen}
      onClose={handleSnackbarClose}
      autoHideDuration={500}
      message="Added to Cart"
      action={action}
    />
  );
};

export default SnackbarNotif;

// const [snackPack, setSnackPack] = React.useState([]);
//   const [open, setOpen] = React.useState(false);
//   const [messageInfo, setMessageInfo] = React.useState(undefined);

//   React.useEffect(() => {
//     if (snackPack.length && !messageInfo) {
//       // Set a new snack when we don't have an active one
//       setMessageInfo({ ...snackPack[0] });
//       setSnackPack((prev) => prev.slice(1));
//       setOpen(true);
//     } else if (snackPack.length && messageInfo && open) {
//       // Close an active snack when a new one is added
//       setOpen(false);
//     }
//   }, [snackPack, messageInfo, open]);

//   const handleClick = (message) => () => {
//     setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
//   };

//   const handleClose = (event, reason) => {
//     if (reason === 'clickaway') {
//       return;
//     }
//     setOpen(false);
//   };

//   const handleExited = () => {
//     setMessageInfo(undefined);
//   };

//   return (
//     <div>
//       <Button onClick={handleClick('Message A')}>Show message A</Button>
//       <Button onClick={handleClick('Message B')}>Show message B</Button>
//       <Snackbar
//         key={messageInfo ? messageInfo.key : undefined}
//         open={open}
//         autoHideDuration={6000}
//         onClose={handleClose}
//         TransitionProps={{ onExited: handleExited }}
//         message={messageInfo ? messageInfo.message : undefined}
//         action={
//           <React.Fragment>
//             <Button color="secondary" size="small" onClick={handleClose}>
//               UNDO
//             </Button>
//             <IconButton
//               aria-label="close"
//               color="inherit"
//               sx={{ p: 0.5 }}
//               onClick={handleClose}
//             >
//               <CloseIcon />
//             </IconButton>
//           </React.Fragment>
//         }
//       />
//     </div>
//   );
// }
