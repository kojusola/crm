import { Phone } from "@styled-icons/boxicons-solid/Phone";
import { Mail } from "@styled-icons/foundation/Mail";

import { Pagination, Avatar } from ".";

function ContactsTable(props) {
    const {
        totalRecords,
        pageLimit,
        pageNeighbours,
        currentClients,
        onPageChanged,
    } = props;

    return (
        <>
            <div className="contacts-table-div">
                <table className="table">
                    <thead className="table-thead">
                        <tr>
                            <th>Client</th>
                            <th>Phone Number</th>
                            <th>Created</th>
                            <th>Actions</th>
                            <th>Tags</th>
                        </tr>
                    </thead>
                    <tbody className="table-tbody">
                        {currentClients.map((item) => {
                            return (
                                <tr key={item.phone}>
                                    <td>
                                        <div className="avatar-div">
                                            <Avatar />
                                        </div>
                                        <div className="details-div">
                                            {item.firstname && (
                                                <>{item.firstname}</>
                                            )}
                                            {item.lastname && (
                                                <>{item.lastname}</>
                                            )}
                                            {item.name && <>{item.name}</>}
                                            {/* <br />
                                            {item.email && (
                                                <>
                                                    {item.email}
                                                    <br />
                                                </>
                                            )}
                                            {item.phone} */}
                                        </div>
                                    </td>
                                    <td>{item.phone}</td>
                                    <td>{item.created}</td>
                                    <td>
                                        <span>
                                            <button className="btn btn-secondary action-btn">
                                                <span className="action-icon">
                                                    <Phone size={16} />
                                                </span>
                                                <span className="action-label">
                                                    Call
                                                </span>
                                            </button>
                                        </span>
                                        &nbsp;&nbsp;
                                        <span>
                                            <button className="btn btn-secondary action-btn">
                                                <span className="action-icon">
                                                    <Mail size={16} />
                                                </span>
                                                <span className="action-label">
                                                    SMS
                                                </span>
                                            </button>
                                        </span>
                                    </td>
                                    <td>
                                        {item.tags &&
                                            item.tags.map((item, id) => {
                                                return (
                                                    <span key={id}>
                                                        {item}&nbsp;
                                                    </span>
                                                );
                                            })}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <br />
            <Pagination
                totalRecords={totalRecords}
                pageLimit={pageLimit}
                pageNeighbours={pageNeighbours}
                onPageChanged={onPageChanged}
            />
        </>
    );
}

export default ContactsTable;
