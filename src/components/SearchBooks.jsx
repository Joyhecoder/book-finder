import React, { useState, useEffect } from 'react';
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
import Alert from '@mui/material/Alert';
import axios from "axios"




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
    // const [series, setSeries] = useState('')
    const [error, setError] = useState(false)
    const [fetch, setFetch] = useState(false)

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

//   const handleSeries = (e) => {
//     e.preventDefault()
//     setSeries(e.target.value)
//   }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!author){
        setError(true)
    }else{
        setFetch(true)
        setFetch(false)
    }
    fetchBook()
  }

  const fetchBook = async () => {

    let authorArr = author.split(" ")
    // console.log(authorArr);
    let fetchAuthor = authorArr.join("%20")
    console.log(fetchAuthor)

    let titleArr = title.split(" ")
    let fetchTitle = titleArr.join("%20")
    // console.log(fetchTitle);

    const options = {
        method: 'GET',
        url: 'https://book-finder1.p.rapidapi.com/api/search',
        params: {
          author: author,
          lexile_min: '600',
          lexile_max: '800',
          results_per_page: '25',
          page: '1'
        },
        headers: {
          'X-RapidAPI-Key': 'a6c84714aamshd7312f736a5f530p1a827bjsn8c619e6200a6',
          'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
        }
      };

      axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
    //!only have author info
    
   //have author and title

   //have author title and book type
  }

//   useEffect(() => {

    // const fetchBook = async () => {

    //     let authorArr = author.split(" ")
    //     // console.log(authorArr);
    //     let fetchAuthor = authorArr.join("%20")
    //     console.log(fetchAuthor)
    
    //     let titleArr = title.split(" ")
    //     let fetchTitle = titleArr.join("%20")
    //     // console.log(fetchTitle);
    
    //     const options = {
    //         method: 'GET',
    //         url: 'https://book-finder1.p.rapidapi.com/api/search',
    //         params: {
    //           author: author,
    //           lexile_min: '600',
    //           lexile_max: '800',
    //           results_per_page: '25',
    //           page: '1'
    //         },
    //         headers: {
    //           'X-RapidAPI-Key': 'a6c84714aamshd7312f736a5f530p1a827bjsn8c619e6200a6',
    //           'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
    //         }
    //       };
    
    //       axios.request(options).then(function (response) {
    //         console.log(response.data);
    //     }).catch(function (error) {
    //         console.error(error);
    //     });
    //     //!only have author info
        
    //    //have author and title
    
    //    //have author title and book type
    //   }



//    fetchBook()
    


//   }, [fetch])

 
  
  
    
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
                        <Typography variant="h6">Author name is required! </Typography>

                        <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },
                        }} noValidate autoComplete="off">
                            <TextField id="title" label="Title" variant="outlined" onChange={e=>handleTitle(e)} />
                            <TextField id="author" label="Author" variant="outlined" required onChange={e=>handleAuthor(e)} />
                            {/* <TextField id="series" label="Series" variant="outlined" helperText="" onChange={e=>handleSeries(e)} /> */}
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

                    {/* if author is empty, display error message */}
                    {error ? <Stack sx={{ width: '100%', minWidth: 150, m: '3rem' }} spacing={2}>
                                <Alert variant="filled" severity="error">
                                    Please give an author!
                                </Alert>
                            
                            </Stack> 
                            : <></>}
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