import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header/Header';

//MUI
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';

const MainLayout = () => {
  const theme = createTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="fixed">
          <Header />
          <Container
            sx={{
              mt: '1rem',
            }}
          >
            <Suspense>
              <Outlet />
            </Suspense>
          </Container>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default MainLayout;