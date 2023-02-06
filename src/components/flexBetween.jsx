import { Box } from "@mui/material";
import { styled } from "@mui/system";

/* this allows us to reuse this set of css properties 
where we need them */
const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;
