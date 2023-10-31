import React, { useState } from 'react'
import NewsCard from '../components/NewsCard';
import { Box, Divider, FormControl, Grid, Hidden, Input, InputLabel, MenuItem, Pagination, Paper, Select, Stack, Typography } from '@mui/material';
import { CategoryFilterMobile, CategoryFilterWindows } from '../components/SearchAndFilter';
import useApiData from '../ApiFunctions/ApiFucntions';
import NewsAppBar from '../components/NewsAppBar';
import Footer from '../components/Footer';
import { MyStyles } from '../assets/MyStyles';

const DashBoard = () => {
  // State to manage the number of items per page
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // get data form custom hook "useApiData"
  const { newsData, selectedCategory, setSelectedCategory, searchQuery, setSearchQuery, filteredNews, currentPage, handlePageChange, paginatedNews, totalPages } = useApiData(itemsPerPage);

  // handlar function to handle the change in no of elements shown on one page
  const handlePageItemsChange = (event) => {
    setItemsPerPage(event.target.value);
  };
  return (

    <Box sx={MyStyles.DashboardBackground}>
      <Box sx={MyStyles.StickyAppBar}>
        {/* App Bar to display search functionality */}
        <NewsAppBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </Box>
      {/* Main gird container to define layout */}
      <Grid container spacing={2} mb={1}>
        {/* Category filter for larger screens (Windows) */}
        <Hidden mdDown >
          <Grid item md={2} height="100vh">
            <Paper elevation={3} style={MyStyles.StickySection1}>
              <CategoryFilterWindows selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
              <Divider sx={{ borderBottomWidth: 5 }} />
              <Box>
                {/* Additional filter options can be added here */}
                Some other filter options will go here
              </Box>
            </Paper>
          </Grid>
        </Hidden>

        <Grid item xs={12} sm={12} md={8}>
          {/* category filter for smaller screens (mobile) */}
          <Hidden mdUp>
            <Box maxHeight='100%'>
              <CategoryFilterMobile selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            </Box>
          </Hidden>

          {/* Main news display from Api Data */}
          <Box minHeight="75vh">
            {filteredNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </Box>

          {/* pagination */}
          <Box sx={MyStyles.PaginationStyle}>
            <Divider />
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              variant='outlined'
              color='primary'
            />
            <Box>
              page items:
              <FormControl fullWidth={false}>
                <Select
                  value={itemsPerPage}
                  onChange={handlePageItemsChange}
                  size='small'
                  variant='standard'
                  sx={{ width: "50px" }}
                >
                  {/* Dropdown menu for selecting items per page */}
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Grid>
        {/* Right column (space for ads or other features) for larger screens */}
        <Hidden mdDown>
          <Grid item md={2}>
            Ads and other content goes here
          </Grid>
        </Hidden>
      </Grid>
      {/* footer */}
      <Footer />
    </Box>
  )
}

export default DashBoard;
