import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Grid, Box, Link } from '@mui/material';
import NewsDetails from './NewsDetails';
import { MyStyles } from '../assets/MyStyles';

const NewsCard = ({ news }) => {
  // State to manage the open/closed state of the NewsDetails modal
  const [open, setOpen] = useState(false);


  // Extract hashtags from the news and split them into an array
  const hashtagsArray = news.attributes.hashtags.split(',').map((tag) => tag.trim());

  // Functions to open and close the NewsDetails modal
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Card for displaying news content */}
      <Card sx={MyStyles.CardShadow}>
        <Grid container spacing={2}>
          {/* Grid item for the news image */}
          <Grid item xs={12} sm={4} md={3} sx={MyStyles.CardCenterImg}>
            <CardMedia
              component="img"
              alt={news.attributes.headline}
              style={MyStyles.CardImgSize}
              image={news.attributes.newsIcon}
            />
          </Grid>
          {/* Grid item for news details */}
          <Grid item xs={12} sm={8} md={9}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {news.attributes.headline}
              </Typography>
              <Typography variant="body2" color="blue">
                {hashtagsArray.map((tag) => `#${tag}`).join(" ")}
              </Typography>
              <Box sx={MyStyles.CardSpredElements}>
                <Typography variant="body2" color="text.secondary">
                  Category: {news.attributes.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Source: {news.attributes.newsSource}
                </Typography>
              </Box>
              <Link href="#" color="primary" onClick={handleOpen}>
                Read More...
              </Link>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
      {/* Modal for displaying detailed news when Read More is clicked */}
      <NewsDetails open={open} handleClose={handleClose} news={news} hashtagsArray={hashtagsArray} />
    </>
  );
};

export default NewsCard;
