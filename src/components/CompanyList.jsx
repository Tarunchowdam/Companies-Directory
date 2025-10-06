import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Pagination,
  Stack
} from '@mui/material';
import CompanyCard from './CompanyCard';
import companiesData from '../data/companies.json';

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const [search, setSearch] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [industryFilter, setIndustryFilter] = useState('');
  const [sortAZ, setSortAZ] = useState(false);
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    setCompanies(companiesData);
  }, []);

  // Filter and sort
  const filteredCompanies = companies
    .filter(c =>
      c.name.toLowerCase().includes(search.toLowerCase()) &&
      (locationFilter ? c.location === locationFilter : true) &&
      (industryFilter ? c.industry === industryFilter : true)
    )
    .sort((a, b) => (sortAZ ? a.name.localeCompare(b.name) : 0));

  const pageCount = Math.ceil(filteredCompanies.length / itemsPerPage);
  const paginatedCompanies = filteredCompanies.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const resetFilters = () => {
    setSearch('');
    setLocationFilter('');
    setIndustryFilter('');
    setSortAZ(false);
    setPage(1);
  };

  const locations = [...new Set(companies.map(c => c.location))];
  const industries = [...new Set(companies.map(c => c.industry))];

  return (
    <Box>
      {/* Filters Row */}
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        mb={4}
        alignItems="center"
        flexWrap="wrap"
      >
        {/* Search Bar */}
        <TextField
          label="Search Company"
          variant="outlined"
          value={search}
          onChange={e => setSearch(e.target.value)}
          sx={{
            flex: 1,
            minWidth: 180,
            '& .MuiOutlinedInput-root': {
              borderRadius: '50px',
              backgroundColor: '#1e293b',
              color: '#ffffff',
            },
            '& .MuiInputLabel-root': {
              color: '#ffffff',
            },
            '& .MuiOutlinedInput-input': {
              color: '#ffffff',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#888888',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#ffffff',
            },
            '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#1976d2',
            },
          }}
        />

        {/* Location Select */}
        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel sx={{ color: '#ffffff' }}>Location</InputLabel>
          <Select
            value={locationFilter}
            label="Location"
            onChange={e => setLocationFilter(e.target.value)}
            sx={{
              borderRadius: '50px',
              backgroundColor: '#1e293b',
              color: '#ffffff',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#888888',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ffffff',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#1976d2',
              },
            }}
          >
            <MenuItem value="">All</MenuItem>
            {locations.map(loc => (
              <MenuItem key={loc} value={loc}>{loc}</MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Industry Select */}
        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel sx={{ color: '#ffffff' }}>Industry</InputLabel>
          <Select
            value={industryFilter}
            label="Industry"
            onChange={e => setIndustryFilter(e.target.value)}
            sx={{
              borderRadius: '50px',
              backgroundColor: '#1e293b',
              color: '#ffffff',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#888888',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ffffff',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#1976d2',
              },
            }}
          >
            <MenuItem value="">All</MenuItem>
            {industries.map(ind => (
              <MenuItem key={ind} value={ind}>{ind}</MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Sort Select */}
        <FormControl sx={{ minWidth: 120 }}>
          <Select
            value={sortAZ}
            onChange={e => setSortAZ(e.target.value)}
            sx={{
              borderRadius: '50px',
              backgroundColor: '#1e293b',
              color: '#ffffff',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#888888',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ffffff',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#1976d2',
              },
            }}
          >
            <MenuItem value={false}>Default</MenuItem>
            <MenuItem value={true}>A - Z</MenuItem>
          </Select>
        </FormControl>

        {/* Reset Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={resetFilters}
          sx={{ borderRadius: '50px', minWidth: 120 }}
        >
          Reset
        </Button>
      </Stack>

      {/* Cards Grid */}
      <Grid container spacing={3}>
        {paginatedCompanies.length > 0 ? (
          paginatedCompanies.map(company => (
            <Grid
              item
              key={company.id}
              xs={12} sm={6} md={3}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <CompanyCard company={company} />
            </Grid>
          ))
        ) : (
        <Box 
            sx={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',        // horizontal center
            justifyContent: 'center',    // vertical center
            height: '60vh',              // vertical centering space
            backgroundColor: '#1e293b',
            color: '#ffffff',
            borderRadius: 3,
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            textAlign: 'center',
            padding: 4,
            width: '100%',               // full width
        }}
        >
        <Box sx={{ fontSize: 60, mb: 2 }}>😔</Box> 
        <Box sx={{ fontSize: 22, fontWeight: 600 }}>No companies found</Box> 
        <Box sx={{ fontSize: 16, color: '#aaaaaa', mt: 1 }}>
            Try adjusting your search or filters
        </Box>
        </Box>


        )}
      </Grid>

      {/* Pagination */}
      {pageCount > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Pagination
            count={pageCount}
            page={page}
            onChange={(e, value) => setPage(value)}
            color="primary"
          />
        </Box>
      )}
    </Box>
  );
};

export default CompanyList;
