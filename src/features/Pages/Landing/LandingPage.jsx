import React from "react";
import { Box } from "@mui/material";
import InsightCard from "./components/InsightCard/InsightCard";
import Grafik from "./components/Grafik/Grafik";
import TabelSPBU from "./components/TebelSPBU/TabelSPBU";

export default function LandingPage() {
  return (
    <Box>
      <InsightCard />
      <Grafik />
      <TabelSPBU />
    </Box>
  );
}
