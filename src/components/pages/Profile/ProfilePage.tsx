'use client';

import React from 'react';

interface ProfilePageProps {
  profileName: string
}

export function ProfilePage({ profileName }:ProfilePageProps) {
// get profile data from api

  return (
    <div>{profileName}</div>
  );
}
