import React, { useState } from "react";

function Pagination({ totalPages, pageNumber, setPageNumber }) {
  let pageNumberArr = [];
  for (let i = 0; i < totalPages; i++) {
    pageNumberArr.push(i + 1);
  }



  return (
    <div>
      <nav aria-label="...">
        <ul className="pagination">
          {pageNumberArr.map((pageN) => {
            return (
              <li
                className={
                  pageNumber == pageN ? "page-item active" : "page-item"
                }
                key={pageN}
                onClick={() => {
                  return setPageNumber(pageN);
                }}
              >
                <a className="page-link">{pageN}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
