import moment from "moment";
import Table from "react-bootstrap/Table";

const CurrencyTable = ({ data, title }) => {
    return (
        <>
            <h1 className="text-bg-secondary text-light text-center p-2 rounded">
                {title}
            </h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.reverse().map(value => {
                            return (
                                <tr>
                                    <td>{moment(new Date(value.date).toLocaleString(), "M/D/YYYY, h:mm:ss A").format("YYYY-MM-DD HH:mm:ss")}</td>
                                    <td>{value.rate}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
        </>
    );
}

export default CurrencyTable;