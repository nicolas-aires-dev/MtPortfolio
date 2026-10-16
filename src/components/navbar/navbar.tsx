import { AppBar, Box, Button, Toolbar } from "@mui/material";

const Navbar = () => {
    return (
        <AppBar position="absolute">
            <Toolbar sx={{ justifyContent: "center", px: { xs: 1, sm: 3 }, }}            >
                <Box
                    sx={{ display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: { xs: 0, sm: 2, md: 4 },
                        flexWrap: "wrap",
                        width: "100%",
                    }}
                >
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Projects</Button>
                    <Button color="inherit">Contact</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;