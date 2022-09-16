import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const PaginationButtons = ({
  count,
  page,
  setNewPage,
  limit,
  newsByCategory,
}) => {
  const handlePage = (event, newPage) => {
    setNewPage(newPage);
  };

  return (
    !newsByCategory.id && (
      <Stack spacing={2}>
        <Pagination
          count={count / limit}
          onChange={handlePage}
          hidePrevButton
          hideNextButton
          color='primary'
          page={page}
        />
      </Stack>
    )
  );
};
