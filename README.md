# Project Structure (React + Vite) 

\news-dashboar (main directory) 
    \src
        \ApiFunctions
            ApiFunctions.jsx
        \components
            Footer.jsx
            NewsAppBar.jsx
            NewsCard.jsx
            NewsDetails.jsx
            SearchAndFilter.jsx
        \pages
            DashBoard.jsx
    App.jsx
index.html
package.json
README.md


# initial setup

1. created project using command "npm create vite"

2. navigate to project directory (news-dashboard) and installed required dependancies with `npm install` or `npm i`

3. run the project locally using "npm run dev" to test if everything working correctly.


# Mui installation

1. To add Material-UI (MUI), install the following packages: 
    `npm install @mui/material @emotion/react @emotion/styled`

2. to add MUI icons, use following 
    `npm install @mui/icons-material`

# working with api 

1. Install Axios, a popular HTTP client for making API requests: 
    `npm install axios`
2. The project uses Axios to fetch data from the API endpoint at `https://linesnews.onrender.com/api/news-datas`
3. All API-related functions can be found in the file `ApiFucntions.jsx`, located at `src/ApiFunctions/ApiFunctions.jsx`

# UI Components

1. The project utilizes Material-UI (MUI) for designing the user interface.
2. The main page, known as the "Dashboard," is located at  `src\pages\DashBoard.jsx`. This page contains multiple smaller components
3. All necessary components are organized within the `components` directory, located at `src\components\{component_name}.jsx`.