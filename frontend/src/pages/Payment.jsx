import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { Typography } from "@mui/material";

export default function Payment() {
  const [gate, setGate] = useState("");

  const handleChange = (event) => {
    setGate(event.target.value);
  };

  return (
    <>
      <h1>Payment & Boarding</h1>
      <Typography>Contact Details</Typography>
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
        <TextField id="full-name" label="Full name" variant="standard" />
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
      <Box sx={{ display: "flex", justifyContent: "left", p: 1, ml: 77 }}>
        <TextField id="phone-number" label="Phone number" variant="standard" />
      </Box>
      <Typography sx={{ pt: 10 }}>Payment Method</Typography>
      <Box sx={{ display: "flex", justifyContent: "center", ml: 10 }}>
        <TextField
          id="card-number"
          label="Card number"
          variant="standard"
          sx={{ m: 2 }}
        />
        <TextField
          id="expiry-date"
          label="Expiry date"
          variant="standard"
          sx={{ m: 2 }}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "left", ml: 77 }}>
        <TextField id="cryptogram" label="Cryptogram" variant="standard" />
      </Box>
    </>
  );
}
