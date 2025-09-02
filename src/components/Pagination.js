import * as React from "react";
import { Pagination, Stack } from "@mui/material";

function Paginations({ setPage, totalPage }) {
  return (
    <Stack
      spacing={2}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "1rem",
      }}
    >
      <Pagination
        count={totalPage}
        variant="outlined"
        color="primary"
        dir="ltr"
        onChange={(e, value) => setPage(value)}
      />
    </Stack>
  );
}

export default Paginations;
