import React from "react";
import { Box, Paper } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function InsightCard() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {/* {Array.from(Array(4)).map((_, index) => (
        ))} */}
          <Grid xs={4} sm={4} md={3}>
            <Item>xs=2</Item>
          </Grid>
          <Grid xs={4} sm={4} md={3}>
            <Item>xs=2</Item>
          </Grid>
          <Grid xs={4} sm={4} md={3}>
            <Item>xs=2</Item>
          </Grid>
          <Grid xs={4} sm={4} md={3}>
            <Item>xs=2</Item>
          </Grid>
      </Grid>
    </Box>
  );
}
