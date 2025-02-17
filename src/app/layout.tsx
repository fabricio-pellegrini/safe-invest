import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import Copyright from '@/components/Copyright';
import NavBar from '@/components/NavBar';
import { Container, Box, Grid2 } from '@mui/material';
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { BasicBreadcrumbs } from '@/components/BasicBreadcrumbs';
import { BasicBackButton } from '@/components/BasicBackButton';

export default async function RootLayout(props: Readonly<{ children: React.ReactNode }>) {

  const session = await getServerSession(options);

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <NavBar session={session} />
            <Container maxWidth="xl">
              <Box sx={{ mt: 12 }}>
                <Grid2 container spacing={3}>
                  <Grid2 size="grow">
                    <BasicBreadcrumbs />
                  </Grid2>
                  <Grid2 sx={{ flexGrow: 1, textAlign: 'right' }}>
                    <BasicBackButton />
                  </Grid2>
                </Grid2>
              </Box>
              <Box sx={{ mt: 4, mb: 12 }}>
                {props.children}                
              </Box>
              <Copyright />
            </Container>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}