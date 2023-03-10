import NewsFeed from "./NewsFeed";
/* import Searchbar from "./Searchbar"; */
import StartAPost from "./CreatePostNewspage";
// import { useSelector } from "react-redux";
import { Spinner, Container, Row, Col } from "react-bootstrap";
import HomeLeftSidebar from "./HomeLeftSidebar";
import HomeRightSidebar from "./HomeRightSidebar";

const Home = () => {
  // const isLoading = useSelector((state) => state.isLoading);

  return (
    <>
      <Container className="mt-4">
        <Row className="d-flex justify-content-center">
          <Col xs={3} className="order-1 mt-2">
            <HomeLeftSidebar />
          </Col>
          <Col xs={6} className="order-2 mt-2">
            <StartAPost />

            {/* <Searchbar /> */}
            {/* {isLoading && <Spinner animation="border" variant="primary" className="my-2" />} */}
            <NewsFeed />
          </Col>
          <Col xs={3} className="order-3 mt-2">
            <HomeRightSidebar />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
