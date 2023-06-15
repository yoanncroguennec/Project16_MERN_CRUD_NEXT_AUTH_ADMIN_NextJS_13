import * as React from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";

//////////////////// EXPORT FUNCTION ////////////////////
export default function AddPostDashbord({ handleSubmit }) {
  //////////////////// RESPONSIVES ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  //////////////////// STYLES ////////////////////
  const TypoBtnAddPostAndSendPost = styled(Typography)(({ theme }) => ({
    background: "#53c28b",
    border: "2px solid #FFF",
    borderRadius: "25px",
    color: "#FFF",
    cursor: "pointer",
    fontWeight: "bold",
    padding: "10px",
    width: "300px",
    "&:hover": {
      background: "#f00",
    },
    [theme.breakpoints.down("sm")]: {},
  }));

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

  const stylesFormAddPost = {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    gap: "20px",
  };

  const stylesInputTextarea = {
    background: "transparent",
    border: "2px solid #bbb",
    borderRadius: "3px",
    color: "#bbb",
    fontSize: "20px",
    fontWeight: "bold",
    padding: "10px",
  };

  const stylesSendAddPost = {

  }

  // States
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <TypoBtnAddPostAndSendPost
        align='center'
        onClick={handleOpen}
        variant='h5'
      >
        Ajouter une nouvelle publication
      </TypoBtnAddPostAndSendPost>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit} style={stylesFormAddPost}>
            <Typography variant={matches ? "h4" : "h6"}>
              Ajouter une nouvelle publication
            </Typography>
            <input
              placeholder='Titre'
              style={stylesInputTextarea}
              type='text'
            />
            <input
              placeholder='Description'
              style={stylesInputTextarea}
              type='text'
            />
            <input
              placeholder='Image'
              style={stylesInputTextarea}
              type='text'
            />
            <textarea
              cols='30'
              placeholder='Contenu'
              rows='10'
              style={stylesInputTextarea}
            />
            {/* Laissez Balise button et non en MUI car si non form ne fonctionne pas */}
            <button>Envoyer</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
