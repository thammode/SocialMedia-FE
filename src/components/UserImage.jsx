import { Box } from "@mui/material";
import { URL } from "App";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        /* CHANGE ENV. VARIABLE */
        src={`${URL}/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
