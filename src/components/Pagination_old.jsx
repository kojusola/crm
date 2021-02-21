import _ from "lodash";

import "./styles/Pagination.css";

function Pagination(props) {
    const { itemsCount, pageSize, currentPage, onPageChange } = props;

    const pagesCount = Math.ceil(itemsCount / pageSize);

    if (pagesCount === 1) return null;

    const pages = _.range(1, pagesCount + 1);

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {/* <li class="page-item">
            <a class="page-link" href="#">
                Previous
            </a>
        </li> */}
                {pages.map((page) => {
                    return (
                        <li
                            key={page}
                            className={
                                page === currentPage
                                    ? "page-item active"
                                    : "page-item"
                            }
                            style={{ backgroundColor: "transparent" }}
                        >
                            <a
                                className="page-link"
                                onClick={() => onPageChange(page)}
                                style={{
                                    cursor: "pointer",
                                    color: "#181818",
                                    backgroundColor: "transparent",
                                }}
                            >
                                {page}
                            </a>
                        </li>
                    );
                })}
                {/* <li class="page-item">
            <a class="page-link" href="#">
                Next
            </a>
        </li> */}
            </ul>
        </nav>
    );
}

export default Pagination;
