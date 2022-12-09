import React, {useEffect} from 'react'
import { Box } from '@mui/system';




// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

//!book cover search api
//https://bookcover-api.onrender.com/bookcover?book_title=Harry+Potter+Destroy+Horcruxes&author_name=Terrance+Crawford

import { createTheme, ThemeProvider, Typography } from '@mui/material';
const theme = createTheme({
  typography: {
    fontFamily: [
      'chilanka',
      'cursive'
    ].join(','),
  },});




const BookOfTheDay = () => {

    useEffect(() => {
  
    }, [])
  return (
    <>
    <ThemeProvider theme={theme}>
        <Box className="container" sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}} >
            
            <Box className='quiz' sx={{ background: '#F5EBE0', width: 1/2}}>
                <Typography variant="h4" align="center" sx={{ mt: '2rem'}}>Take a quick quiz</Typography>
                
                <Typography variant="h4" align="center">get your Book of the Day</Typography>
            </Box>
            
            <Box className="showABook" sx={{ background: '#EDEDE9', width: 1/2}}>
                <Typography variant="h4" align="center" sx={{ mt: '2rem'}}>This is where to display a book</Typography>
            </Box>
        </Box>
    </ThemeProvider>
    
    </>
    
  )
}

export default BookOfTheDay