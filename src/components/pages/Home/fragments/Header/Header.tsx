'use client';

import { Menu as MenuIcon } from '@mui/icons-material';
import {
  AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography,
} from '@mui/material';
import Image from 'next/image';
import router from 'next/router';
import * as React from 'react';

export function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const scrollToSection = (sectionId:string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pages = [
    {
      label: 'Início',
      onClick: () => scrollToSection('community'),
    },
    {
      label: 'Para desenvolvedores',
      onClick: () => scrollToSection('profiles'),
    },
    {
      label: 'Para recrutadores',
      onClick: () => scrollToSection('contact'),
    },
    {
      label: 'contato',
      onClick: () => scrollToSection('contact'),
    },

  ];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexGrow: 1,
              cursor: 'pointer',
            }}
            onClick={() => { router.push('/'); }}
          >
            <Image
              src="/logo.svg"
              alt="logo"
              width={200}
              height={50}
              priority
            />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.label}
                  onClick={() => {
                    page.onClick();
                    handleCloseNavMenu();
                  }}
                >
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',

            }}
            onClick={() => { router.push('/'); }}
          >
            <Image
              src="/logo.svg"
              alt="logo"
              width={200}
              height={50}
              priority
            />
          </Box>

          <Box sx={{
            width: '100%',
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
          }}
          >
            {pages.map((page) => (
              <Button
                key={page.label}
                onClick={() => {
                  page.onClick();
                  handleCloseNavMenu();
                }}
                variant="text"
                color="inherit"

              >
                {page.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>

            <Button
              variant="contained"
              href="/auth/login"
              sx={{
                width: '100%',
                borderRadius: '10px',
                backgroundColor: 'primary.main',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
                color: 'white',
                fontWeight: 'bold',
                gap: '10px',
              }}
            >
              Entrar
            </Button>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
