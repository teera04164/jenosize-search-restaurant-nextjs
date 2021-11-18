import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

import Navbar from '../src/components/Navbar'
import BodyLayout from '../src/components/BodyLayout';
import RestuarantList from '../src/components/RestuarantList';
import Footer from '../src/components/Footer';

import { GlobalProvider } from '../src/contexts/GlobalContext';
import HeadMeta from '../src/components/HeadMeta';

const Theme = createTheme({
  palette: {
    primary: {
      main: orange[50],
    },
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalProvider>
        <HeadMeta />
        <Navbar />
        <BodyLayout>
          <RestuarantList />
        </BodyLayout>
        <Footer />
      </GlobalProvider>
    </ThemeProvider>
  )
}
