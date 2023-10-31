import { AppBar, Grid, Icon, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { SearchBox } from './SearchAndFilter'
import { MyStyles } from '../assets/MyStyles'

const NewsAppBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div>
      {/* App Bar with a static position and goldenrod background */}
      <AppBar position='static' sx={{ backgroundColor: 'goldenrod' }}>
        <Toolbar sx={MyStyles.CardSpredElements}>
          {/* Grid container for layout */}
          <Grid container>
            <Grid item xs={4} lg={2}>
              {/* Grid item for the logo (MyNews), I haven't added logo yet */}
              <Typography variant="h5" color="black">
                MyNews
              </Typography>
            </Grid>
            <Grid item xs={8} >
              {/* Grid item for the search input */}
              <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NewsAppBar
