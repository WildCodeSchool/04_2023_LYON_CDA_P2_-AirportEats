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
      <Button onClick={back} color="secondary">
        <ArrowBackIcon sx={{ pr: 1 }} color="secondary" />
        back
      </Button>
    </div>
  );
}
