'use client';

import { MoreVert } from '@mui/icons-material';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';

interface MenuCardProps {
  username: string;
}

export function MenuCard({ username }: MenuCardProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const opened = Boolean(anchorEl);
  const navigation = useRouter();

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleClick = () => {
    navigation.push(`/profile/${username}`);
    handleCloseMenu();
  };
  return (
    <>
      <IconButton onClick={opened ? handleCloseMenu : handleOpenMenu}>
        <MoreVert />
      </IconButton>
      <Menu
        open={opened}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleClick}>Ver Perfil</MenuItem>
      </Menu>
    </>
  );
}
