import React from 'react';
import { ThemeProvider, CssBaseline, Container, Typography, Box } from '@mui/material';
import darkTheme from './theme/darkTheme';
import CompanyList from './components/CompanyList';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: '#1e293b', // main dark background
          paddingTop: 6,
          paddingBottom: 6
        }}
      >
        <Container maxWidth="lg">
          {/* Page Header */}
          <Typography
        variant="h3"
        align="center"
        sx={{
          fontWeight: 700,
          background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: 4,
          textShadow: "0 0 18px rgba(59,130,246,0.25)",
        }}
      >
        Companies Directory
      </Typography>

          {/* Company List Component */}
          <CompanyList />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
