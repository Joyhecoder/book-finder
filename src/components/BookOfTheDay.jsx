import React, {useEffect} from 'react'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

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
        <div>
            <Typography variant="h4">Hello world</Typography>
        </div>
    </ThemeProvider>
    
    </>
    
  )
}

export default BookOfTheDay