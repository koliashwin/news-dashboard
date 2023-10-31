import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, DialogActions, Button, Box, CardMedia } from '@mui/material';
import { MyStyles } from '../assets/MyStyles';

const NewsDetails = ({ open, handleClose, news, hashtagsArray }) => {
    // This component displays detailed news content in a dialog modal

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
                {/* Title for the news details dialog */}
                <Typography gutterBottom variant="h5" component="div">
                    {news.attributes.headline}
                </Typography>
                <Box sx={MyStyles.CardCenterImg}>
                    {/* Displaying news image (I've used icons) */}
                    <CardMedia
                        component="img"
                        alt={news.attributes.headline}
                        style={MyStyles.CardImgSize}
                        image={news.attributes.newsIcon}
                    />
                </Box>
            </DialogTitle>
            <DialogContent>
                {/* Details of the news */}
                <Box sx={MyStyles.CardSpredElements}>
                    <Typography variant="body2" color="text.secondary">
                        Category: {news.attributes.category}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        Source: {news.attributes.newsSource}
                    </Typography>
                </Box>
                <Typography variant='body1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sint ducimus optio possimus, nam architecto facilis voluptas deserunt unde eum, ullam sed quas ut quasi quos consequatur iusto sapiente suscipit!
                </Typography>
                <Typography variant="body2" color="blue">
                    {/* Displaying hashtags */}
                    {hashtagsArray.map((tag) => `#${tag}`).join(" ")}
                </Typography>
                <Typography variant='caption' color='red'>
                    {/* Note about a alternate approach to handle news details display */}
                    NOTE: this could be done by redirecting to different page using routing, since it was not mentioned specificly I've just create a dialog box
                </Typography>
            </DialogContent>
            <DialogActions>
                {/* Button to close the dialog */}
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default NewsDetails;
