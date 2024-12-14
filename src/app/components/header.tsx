import { AppBar, Button, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Expense Logger
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      {/* Extra toolbar helps to avoid content going behind top AppBar */}
      <Toolbar />
    </>
  );
}
