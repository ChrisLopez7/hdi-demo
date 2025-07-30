"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Link from "next/link";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "white",
        boxShadow: "0px 1px 4px rgba(0,0,0,0.1)",
        color: "black",
        zIndex: 1100,
      }}
    >
      {/* Barra superior */}
      <Box
        sx={{
          backgroundColor: "#fff",
          color: "black",
          fontSize: "14px",
          borderBottom: "1px solid #ddd",
          display: "flex",
          justifyContent: "flex-end",
          px: 4,
          py: 0.5,
        }}
      >
        <Box display="flex" gap={3}>
          <Typography sx={{ color: "red", fontWeight: "600", cursor: "pointer" }}>
            ¿Qué hacer en caso de accidente?
          </Typography>
          <Typography>Atención a clientes: 8000 196 000</Typography>
          <Typography sx={{ cursor: "pointer" }}>Pago de Pólizas</Typography>
          <Typography sx={{ cursor: "pointer" }}>Portal Agentes</Typography>
        </Box>
      </Box>

      {/* Barra principal */}
      <Toolbar sx={{ px: 4 }}>
        {/* Logo */}
        <Box display="flex" alignItems="center" flexGrow={1} gap={2}>
          <Image src="/Images/hdi-logo.png" alt="HDI Seguros" width={180} height={80} />
          {/* <Typography sx={{ color: "#2e7d32", fontWeight: "bold", fontSize: "18px" }}>
            TU COMPAÑÍA
          </Typography> */}
        </Box>

        {/* Menú de navegación */}
        <Box display="flex" gap={1} alignItems="flex-start" sx={{ flexGrow: 6 }}>
          <Button
            onClick={handleMenuOpen}
            sx={{ color: "black", textTransform: "none", fontWeight: 500 }}
          >
            Personas ▾
          </Button>
          <Button sx={{ color: "black", textTransform: "none", fontWeight: 500 }}>
            Empresas ▾
          </Button>
          <Button sx={{ color: "black", textTransform: "none", fontWeight: 500 }}>
            Nosotros ▾
          </Button>
          <Button sx={{ color: "black", textTransform: "none", fontWeight: 500 }}>
            Atención a Clientes ▾
          </Button>
          <Button sx={{ color: "black", textTransform: "none", fontWeight: 500 }}>
            Soy Agente ▾
          </Button>
          
        </Box>

        {/* Íconos de búsqueda y botón Cotiza */}
        <Box display="flex" gap={2} alignItems="center">
          <Typography sx={{ color: "black", cursor: "pointer" }}>Blog</Typography>
          <Typography sx={{ color: "black", cursor: "pointer" }}>Facturación</Typography>
          <Typography sx={{ color: "black", cursor: "pointer" }}>Contáctanos</Typography>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#4caf50",
              textTransform: "none",
              fontWeight: "bold",
              px: 3,
              "&:hover": { backgroundColor: "#388e3c" },
            }}
          >
            Cotiza Ahora
          </Button>
        </Box>
      </Toolbar>

      {/* Ejemplo de menú desplegable */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Opción 1</MenuItem>
        <MenuItem onClick={handleMenuClose}>Opción 2</MenuItem>
      </Menu>
    </AppBar>
  );
}
