import { useEffect, useState } from "react";
import CurrencyTable from "../currencyTable";
import http_common from "../../http_common";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const HomePage = () => {
    const [data, SetData] = useState(undefined);

    useEffect(() => {
        http_common.get(process.env.REACT_APP_CURRENCY_ENDPOINT).then(response => {
            SetData(response.data.currencies);
        });
    }, []);
    console.log(data);

    return (
        <Container>
            {
                data &&
                <Row>
                    <Col>
                        <CurrencyTable data={data.USD} title={"United States Dollar"} />
                    </Col>
                    <Col>
                        <CurrencyTable data={data.EUR} title={"Euro"} />
                    </Col>
                </Row>
            }
        </Container>
    );
}

export default HomePage;