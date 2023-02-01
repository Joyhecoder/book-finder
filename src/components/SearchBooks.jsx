import React, { useState } from 'react';
// import BookCard from './BookCard'
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

// card import
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';


import Pagination from '@mui/material/Pagination';



import { createTheme, ThemeProvider } from '@mui/material';
// import { RestorePageRounded } from '@mui/icons-material';
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
    const [bookSearchData, setBookSearchData] = useState([])

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
        //   title: title,
          author: author,
        //   book_type: bookType,
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
        console.log(response.data.results);
        setBookSearchData(response.data.results)
      
    }).catch(function (error) {
        console.error(error);
    });
    //!only have author info
    
   //!have author and title

   //have author title and book type
  }

//card import
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  
  console.log(bookSearchData);

  const [expanded, setExpanded] = React.useState(false);
  const [selectedId, setSelectedId] = useState(-1);
  
  
  const handleExpandClick = (orderId) => {
    // console.log("handle expand value", e)
    // console.log("handle expand id", e.target.id)
    // bookSearchData.map(book=>{
    //   if(book.canonical_isbn == e.target.id){
     
    //   }
    // })
    if(selectedId === orderId){
      setSelectedId(-1)
    }else{
      setSelectedId(orderId)
    }
    // setExpanded(!expanded);
  };
    
  return (
    <>
    <ThemeProvider theme={theme}>
        <Box xs={4} >
            <Box container spacing={2} style={{display: 'flexbox', flexWrap: 'wrap'}}>

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
            
                <br />

                {/* Book display section */}
               
                <Grid className="bookDisplay-section" item xs={8} sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                <br/>
                {bookSearchData.length === 0 ? <>No book result yet! </>
                :
                <>
                
                {bookSearchData.map(book => {
                  return (
                    <Card key={book.canonical_isbn} sx={{ maxWidth: 345, mt:"2rem" }}>
                    <CardHeader title={book.title} subheader={book.authors}/>
                    <CardMedia
                      component="img"
                      height="494"
                      image ={`https://covers.openlibrary.org/b/isbn/${book.canonical_isbn}-M.jpg`}
                      alt={`No book cover picture available for ${book.title}`}
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        {book.summary}
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                      <ExpandMore
                        expand={expanded}                       
                        onClick={()=>handleExpandClick(book.canonical_isbn)}
                        aria-expanded={expanded}
                        aria-label="show more"
                      >
                        <ExpandMoreIcon id = {book.canonical_isbn} />
                      </ExpandMore>
                    </CardActions>
                    <Collapse in={book.canonical_isbn === selectedId ? true : false} timeout="auto" unmountOnExit>
                      <CardContent>
                        <Typography paragraph>Category: {book.categories}</Typography>
                                          
                        <Typography paragraph>Language: {book.language.charAt(0).toUpperCase() + book.language.slice(1)} </Typography>
  
                        <Typography paragraph>Is this book recommended for English Language Learner? &nbsp;{book.english_language_learner ? "Yes" : "No"} </Typography>
                        
                        <Typography>
                          Awards winning: 
                        </Typography>
                        <Typography paragraph>
                          {book.awards.length === 0 ? "No award winning for this book" : book.awards}
                        </Typography>
                      </CardContent>
                    </Collapse>
                  </Card>
                  )
                })}
                 <br />
                    
                </>
                 
                }
                   
                </Grid>
               
            </Box>
        </Box>
    </ThemeProvider>
    
    </>
  )
}

export default SearchBooks