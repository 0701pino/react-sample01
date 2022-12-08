import { Box } from '@mui/material';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          py: 3,
          backgroundColor: 'bisque',
        }}
      >
        header area
      </Box>
      <Box>
        <p>react + typescript + mui v5によるstiky footerの実装</p>
        <p>コンテンツが少ない場合に画面の下にフッターが表示される</p>
      </Box>
      <Box
        sx={{
          textAlign: 'center',
          mt: 'auto',
          backgroundColor: 'lightgray',
        }}
      >
        footer area
      </Box>
    </Box>
  );
}

export default App;
