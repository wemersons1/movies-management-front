import React from "react";
import styles from './Paginate.module.css';
import {default as Paginate} from "react-js-pagination";

interface PaginationProps {
    activePage: number;
    itemsCountPerPage: number;
    totalItemsCount: number;
    pageRangeDisplayed: number;
    handlePageChange: (pageNumber: number) => void;
    lastPageText?: string;
    firstPageText?: string;
}

const Pagination = ({...props}: PaginationProps) =>{
    return(
        <div className={styles.Paginate}>
            <Paginate
                activePage={props.activePage}
                itemsCountPerPage={props.itemsCountPerPage}
                totalItemsCount={props.totalItemsCount}
                pageRangeDisplayed={props.pageRangeDisplayed}
                innerClass={'pagination'}
                itemClass={"page-item"}
                linkClass={"page-link"}
                activeLinkClass={'active'}
                onChange={props.handlePageChange}
                lastPageText={props.lastPageText}
                firstPageText={props.firstPageText}
            />
        </div>
    );

}

export default Pagination
