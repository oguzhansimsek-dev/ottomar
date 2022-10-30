//* node_modules
import {
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";

import news from "../../assets/uploads/logo.png";

const NewsList = () => {
  return (
    <>
      <Col sm="12" md="6" lg="6">
        <Card>
          <img width="100%" height="230px;" src={news} alt="haber başlığı" />
          <CardBody>
            <CardTitle tag="h3">Haber başlığı</CardTitle>
            <CardSubtitle>Admin ve tarih bilgisi</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card‘s content.
            </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col sm="12" md="6" lg="6">
        <Card>
          <img width="100%" height="230px" src="/" alt="haber başlığı" />
          <CardBody>
            <CardTitle tag="h3">Haber başlığı</CardTitle>
            <CardSubtitle>Admin ve tarih bilgisi</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card‘s content.
            </CardText>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default NewsList;
