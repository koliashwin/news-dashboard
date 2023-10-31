import { useEffect, useState } from 'react';
import axios from 'axios';

const useApiData = (itemsPerPage) => {
  // State variables used for data, filtering and pagination
  const [newsData, setNewsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch data from the API endpoint when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://linesnews.onrender.com/api/news-datas");
        setNewsData(response.data.data);
      } catch (error) {
        console.error("Error while fetching data : ", error);
      }
    };
    fetchData();
  }, []);

  // Function to filter news based on user-selected category and search query
  const filterNews = (news) => {
    const categoryMatch = !selectedCategory || selectedCategory === "ALL" || news.attributes.category === selectedCategory;
    const searchMatch = !searchQuery || news.attributes.headline.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  };

  // Filter news based on user selections
  const filteredNews = newsData.filter(filterNews);

  // Calculate the range of items to display based on current page and items per page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Create a paginated list of news
  const paginatedNews = filteredNews.slice(startIndex, endIndex);

  // Calculate the total number of pages based on the number of items
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

  //  to handle page changes
  const handlePageChange = (e, newPage) => {
    setCurrentPage(newPage);
  }

  // Return the data and functions for use in components
  return {
    newsData: paginatedNews,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    filteredNews: paginatedNews,
    currentPage,
    totalPages,
    handlePageChange,
  };
};

export default useApiData;
