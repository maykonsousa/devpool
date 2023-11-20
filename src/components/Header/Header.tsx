'use client';

import { useSession } from '@/hooks';
import { Menu as MenuIcon } from '@mui/icons-material';
import {
  AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography,
} from '@mui/material';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import * as React from 'react';
import { signOut } from 'next-auth/react';

export function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const router = useRouter();
  const { user, status } = useSession();
  const pathName = usePathname();

  const logout = React.useCallback(async () => {
    await signOut();
    router.push('/auth/login');
  }, [router]);

  const isAuth = status === 'authenticated';

  const userMenu = [
    {
      label: 'Ver Perfil',
      onClick: () => { router.push(`/profile/${user?.username}`); },
    },
    {
      label: 'Editar Perfil',
      onClick: () => { router.push('/settings'); },
    },
    {
      label: 'Sair',
      onClick: logout,
    },
  ];

  const pages = [{
    label: 'Comunidade',
    onClick: () => router.push('/community'),
  }, {
    label: 'Buscar Perfis',
    onClick: () => router.push('/search'),
  }, {
    label: 'Vagas',
    onClick: () => router.push('/jobs'),
  }];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onLoginRedirect = () => {
    router.push(`/auth/login?callbackUrl=${pathName}`);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'inherit' }}>
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
            {isAuth ? (
              <Tooltip title={`${user?.name}`}>
                {user?.avatar_url ? (
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={`${user?.name}`} src={user?.avatar_url ? `${user?.avatar_url}` : '/fakeAvatar.jpg'} />
                  </IconButton>
                ) : <Box />}
              </Tooltip>
            ) : (
              <Button
                variant="contained"
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
                onClick={onLoginRedirect}
              >
                Login
              </Button>
            )}
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {userMenu.map((item) => (
                <MenuItem
                  key={item.label}
                  onClick={() => {
                    item.onClick();
                    handleCloseUserMenu();
                  }}
                >
                  <Typography textAlign="center">{item.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
