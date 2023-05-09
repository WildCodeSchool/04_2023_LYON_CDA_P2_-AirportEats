import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function BackButton() {
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };

  return (
    <div style={{ display: "flex", w: "100%", justifyContent: "left" }}>
      <Button onClick={back}>
        <ArrowBackIcon sx={{ color: "black" }} />
      </Button>
    </div>
  );
}
