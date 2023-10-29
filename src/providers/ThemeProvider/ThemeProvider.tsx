'use client'
import React from 'react'
import { NextAppDirEmotionCacheProvider } from './EmotionCache'
import { CssBaseline } from '@mui/material'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'

import { theme } from '@/theme'

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeProvider = ({children}:ThemeProviderProps) => {
  return (
    <NextAppDirEmotionCacheProvider options={{key:'css'}}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </NextAppDirEmotionCacheProvider>
  )
}
