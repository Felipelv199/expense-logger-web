import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export default function Create() {
  return (
    <Container>
      <Stack>
        <Typography variant="h5">Create Transaction</Typography>
        <Paper>
          <Stack spacing={2} padding={2}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Type"
              >
                <MenuItem>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <TextField label="Amount" />
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
}
