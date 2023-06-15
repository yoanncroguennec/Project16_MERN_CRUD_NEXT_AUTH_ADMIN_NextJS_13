// ICONS
import { Box, styled } from "@mui/material";
import { useEffect } from "react";
// ICONS
import { RxCross2 } from "react-icons/rx";
const colorIcon = "#FF0000";
const sizeIcon = 45;

//////////////////// EXPORT FUNCTION ////////////////////
export default function IconDelete({ id }) {
  //////////////////// STYLES ////////////////////
  const BoxDelete = styled(Box)(({ theme }) => ({}));

  // useEffect(() => {
  //   handleDelete()
  // }, [])
  
  // const router = useRouter();
  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
      // router.refresh();
      // window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <BoxDelete>
      <span onClick={() => handleDelete(id)} style={{ color: '#FFF'}}>X</span>
      <RxCross2
        color={colorIcon}
        onClick={() => handleDelete(id)}
        size={sizeIcon}
      />
    </BoxDelete>
  );
}
