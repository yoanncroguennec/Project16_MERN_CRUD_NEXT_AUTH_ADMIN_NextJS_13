import * as React from 'react';
import { Box, Button, Typography, Modal, styled } from '@mui/material';
import styles from "./page.module.css";

//////////////////// EXPORT FUNCTION ////////////////////
export default function AddPostDashbord({ handleSubmit }) {
  //////////////////// STYLES ////////////////////
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#111",
    border: "2px solid #000",
    boxShadow: 24,
    color: "#FFF",
    p: 4,
  };

  const RootRegister = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: "20px",
    [theme.breakpoints.down("sm")]: {},
  }));

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Typography onClick={handleOpen} variant='h5'>
        Ajouter une nouvelle publication
      </Typography>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <form className={styles.new} onSubmit={handleSubmit}>
            <Typography variant='h4'>
              Ajouter une nouvelle publication
            </Typography>
            <input type='text' placeholder='Titre' className={styles.input} />
            <input
              type='text'
              placeholder='Description'
              className={styles.input}
            />
            <input type='text' placeholder='Image' className={styles.input} />
            <textarea
              placeholder='Contenu'
              className={styles.textArea}
              cols='30'
              rows='10'
            />
            <button className={styles.button}>Envoyer</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
