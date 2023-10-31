import React from 'react';
import { Paper, Typography, Box, Link } from '@mui/material';
import { MyStyles } from '../assets/MyStyles';

const Footer = () => {
  return (
    <Paper component="footer" style={MyStyles.footerStyle}>
      <Box>
        <Typography variant="body1" align="center">
          &copy; {new Date().getFullYear()} Some Company Content
        </Typography>
      </Box>
      <Box>
        <Typography variant="body2" align="center">
          Made with ❤️ by <Link href="https://portfolio-koliashwin.vercel.app/">Our Team</Link>
        </Typography>
      </Box>
    </Paper>
  );
}

export default Footer;
