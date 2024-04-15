import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import OrderTrain from "../OrderTrain/OrderTrain";
import "./OrderPagination.css";


function Items({ currentItems, data }) {
  return (
    <>
      {
        data && data.items ?
        data.items.map((item, i) => (
          <OrderTrain key={i} item={item}/>
        ))
        : <p>Результаты не найдены</p>
      }
    </>
  );
}

function PaginatedItems({ itemsPerPage }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [data, setData] = useState({});

  useEffect(() => {
    const getResult = async () => {
      try {
        const response = await fetch("https://students.netoservices.ru/fe-diplom/routes?from_city_id=65f7ee8d3e252100467cb2a3&to_city_id=65f7ee8e3e252100467cb2a4&limit=5&offset=5");
        if (!response.ok) console.error(response.status, response.statusText);
        const result = await response.json();
        setData(result);
        const count = [...Array(result.total_count).keys()];
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(count.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(count.length / itemsPerPage));
      } catch(e) {
        console.error(e.status, e.statusText);
      }
    };
    getResult();
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % data.items.length;
    setItemOffset(newOffset);
  };


  return (
    <>
      <Items currentItems={currentItems} data={data}/>
      <ReactPaginate
        className="pagination-wrapper"
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="<"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

function OrderPagination() {
  return (
    <div className="order-pagination">
      <PaginatedItems itemsPerPage={5} />
    </div>
  );
}

export default OrderPagination;


Items.propTypes = {
  currentItems: PropTypes.array,
  data: PropTypes.object,
};

PaginatedItems.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
};