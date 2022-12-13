import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


import { createTheme, ThemeProvider } from '@mui/material';
const theme = createTheme({
  typography: {
    fontFamily: [
      'chilanka',
      'cursive'
    ].join(','),
  },});

const SearchBooks = () => {
    const [bookType, setBookType] = useState('');
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

  const handleChange = (event) => {
    setBookType(event.target.value);
  }

  const handleTitle = (e) =>{
    e.preventDefault()
    setTitle(e.target.value)
    console.log('title', title)
  }

  const handleAuthor = (e) => {
    e.preventDefault()
    setAuthor(e.target.value)
    console.log(('author', author));
  }

  const handleSeries = (e) => {
    e.preventDefault()
    setAuthor(e.target.value)
  }

  const handleSubmit = (e) =>{

  }
    
  return (
    <>
    <ThemeProvider theme={theme}>
        <Box xs={4} >
            <Grid container spacing={2} style={{display: 'flexbox', flexwrap: 'wrap'}}>

                {/* book Search section */}
                <Grid className="bookSearch-input" item xs={4} >
                    <FormControl sx={{ ml: '3rem', minWidth: 150 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Book Type</InputLabel>
                        <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={bookType}
                        onChange={handleChange}
                        autoWidth
                        label="Age"
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={"fiction"}>Fiction</MenuItem>
                        <MenuItem value={'nonfiction'}>Non-fiction</MenuItem>
                        </Select>
                    </FormControl>
                    <br />
                    <br />
                    <br />
                    <Box className="title-author-series-section" sx={{ ml: '3rem', minWidth: 150}}>
                        <Typography variant="h6">Please type in at least a Book's title, author or series for better search. </Typography>

                        <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },
                        }} noValidate autoComplete="off">
                            <TextField id="title" label="Title" variant="outlined" onChange={e=>handleTitle(e)} />
                            <TextField id="author" label="Author" variant="outlined" onChange={e=>handleAuthor(e)} />
                            <TextField id="series" label="Series" variant="outlined" onChange={e=>handleSeries(e)} />
                        </Box>
                     </Box>

                     <Stack spacing={2} direction="row" sx={{ ml: '3rem', minWidth: 150}} justifyContent="center" > 
                        <Button variant="contained" style={{
                            backgroundColor: "#D5BDAF",
                            padding: "10px 20px",
                            fontSize: "18px",
                            fontWeight: "bold"
                        }} onClick={e=>handleSubmit(e)}>Submit</Button>
                    </Stack>
                </Grid>
            


                {/* Book display section */}
                <Grid className="bookDisplay-section" item xs={8}>
                    <Box>
                        This is where the book is displayed
                    </Box>

                </Grid>
            </Grid>
        </Box>
    </ThemeProvider>
    
    </>
  )
}

export default SearchBooks