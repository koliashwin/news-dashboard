import React from 'react';
import { TextField, Button, ListItem, List, ListItemButton, Divider, ListSubheader, InputAdornment, Box } from '@mui/material';
import { Search } from '@mui/icons-material';
import { MyStyles } from '../assets/MyStyles';

// Array of Categories, you can add more categories like `{ label: "display_name", value: "data_from_API" }`
const categories = [
  { label: 'All', value: '' },
  { label: 'Sports', value: 'SPORTS' },
  { label: 'Politics', value: 'POLITICS' },
  { label: 'World', value: 'WORLD' },
  { label: 'Tech', value: 'TECHNOLOGY' },
  { label: 'Health', value: 'HEALTH' },
];

// SearchBox component for entering search queries
export const SearchBox = ({ searchQuery, setSearchQuery }) => {
  return (
    <Box sx={MyStyles.SearchContainer}>
      <TextField
        placeholder="Search news..."
        variant="standard"
        size='small'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        InputProps={{
          startAdornment:(
            <InputAdornment position='start'>
              <Search/>
            </InputAdornment>
          )
        }}
        sx={MyStyles.SearchInput}
      />
    </Box>
  );
};

// CategoryFilterMobile component for category selection on mobile
export const CategoryFilterMobile = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div style={MyStyles.HorizontalSlider}>
      {categories.map((category) => (
        <Button
          sx={MyStyles.CategoryButtonM}
          key={category.value}
          variant={selectedCategory === category.value ? 'contained' : 'outlined'}
          onClick={() => setSelectedCategory(category.value)}
          style={
            selectedCategory === category.value
              ? {...MyStyles.CategoryButtonHighlightM}
              : {} 
          }
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
};

// CategoryFilterWindows component for category selection on larger screens (Windows)
export const CategoryFilterWindows = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div>
      <List
        component="nav"
        subheader={
          <ListSubheader component="aside" color='inherit'>Categories :</ListSubheader>
        }
      >
        <Divider sx={{borderBottomWidth: 3}}/>
        {categories.map((category) => (
          <ListItem
            key={category.value}
            onClick={() => setSelectedCategory(category.value)}
            selected={selectedCategory === category.value}
            style={
              selectedCategory === category.value
                ? {...MyStyles.CategoryButtonHighlightW} 
                : {height: 35} 
            }
            sx={{height: 40}}
          >
            <ListItemButton sx={MyStyles.CategoryButtonM} >
            {category.label}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>

  );
};