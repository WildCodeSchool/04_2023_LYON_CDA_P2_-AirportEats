import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import BackButton from "@components/BackButton";

export default function Payment() {
  const [gate, setGate] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const path = `/confirmation`;
    navigate(path);
    return enqueueSnackbar("Order confirmed", { variant: "success" });
  };

  const handleChange = (event) => {
    setGate(event.target.value);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "left", margin: 50 }}>
        <BackButton />
      </div>
      <h1>Payment & Boarding</h1>
      <Typography sx={{ fontWeight: "600" }}>Contact Details</Typography>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "15ch" },
          display: "flex",
          justifyContent: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="full-name"
          label="Full name"
          variant="standard"
          defaultValue="John Doe"
          required
        />
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Gate</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={gate}
            onChange={handleChange}
            label="Gate"
          >
            <MenuItem value={1}>Gate 1</MenuItem>
            <MenuItem value={2}>Gate 2</MenuItem>
            <MenuItem value={3}>Gate 3</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ p: 1, mr: "6rem" }}>
        <TextField
          id="phone-number"
          label="Phone number"
          variant="standard"
          defaultValue="0645237606"
          required
        />
      </Box>
      <Typography sx={{ pt: 5, fontWeight: "600" }}>Payment Method</Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          id="card-number"
          label="Card number"
          variant="standard"
          defaultValue="4970407145623489"
          sx={{ m: 2, width: "8rem" }}
          required
        />
        <TextField
          id="expiry-date"
          label="Expiry date"
          variant="standard"
          defaultValue="06/25"
          sx={{ m: 2, width: "6rem" }}
          required
        />
      </Box>
      <Box sx={{ p: 1, mr: "11rem" }}>
        <TextField
          id="cryptogram"
          label="Cryptogram"
          variant="standard"
          defaultValue="123"
          required
          sx={{ width: "5rem" }}
        />
      </Box>
      <Button
        onClick={handleSubmit}
        variant="contained"
        sx={{
          color: "white",
          m: 5,
          borderRadius: 3,
          backgroundColor: "#e1b1b1",
          width: "180px",
          ":hover": {
            bgcolor: "#e1b1b1",
          },
        }}
      >
        Pay
      </Button>
    </>
  );
}
