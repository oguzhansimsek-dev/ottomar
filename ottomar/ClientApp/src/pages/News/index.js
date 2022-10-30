//* Components
import PageTitle from "../../components/PageTitle";
import NewsList from "../../components/NewsList";

//* node_modules
import { Container, Row, Col } from "reactstrap";

const News = () => {
  return (
    <section>
      <PageTitle title="Haberler" />

      <Container className="page-container">
        <Row>
          <NewsList />
        </Row>
      </Container>
    </section>
  );
};

export default News;
