import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import { createTheme, ThemeProvider } from '@mui/material';
const theme = createTheme({
  typography: {
    fontFamily: [
      'chilanka',
      'cursive'
    ].join(','),
  },});

const SearchBooks = () => {
    const [bookType, setBookType] = React.useState('');

  const handleChange = (event) => {
    setBookType(event.target.value);
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
                            <TextField id="title" label="Title" variant="outlined" />
                            <TextField id="author" label="Author" variant="outlined" />
                            <TextField id="series" label="Series" variant="outlined" />
                        </Box>
                     </Box>
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