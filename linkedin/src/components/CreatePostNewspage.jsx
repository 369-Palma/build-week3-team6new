import { Card, Col, Row } from "react-bootstrap";
import { HiOutlinePhoto } from "react-icons /hi";
const CreatePostNewsPage = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div style={{ width: "700px", maxWidth: "100%" }}>
          {randomPosts.map((post) => (
            <Card key={post?.id} style={{ margin: "1rem 0" }}>
              <Card.Img
                variant="top"
                src={"#"}
                alt="foto"
                className="fotoTonde ms-2"
              />
              <Card.Body>
                <input type="search" placeholder="Avvia un post"></input>
              </Card.Body>

              <Row className="text-muted post-actions justify-content-center">
                <Col
                  xs="2"
                  className="d-flex align-items-center justify-content-center p-2 mx-3 rounded"
                >
                  <p className="mb-0 ml-2 text-primary">
                    <HiOutlinePhoto />
                    Foto
                  </p>
                </Col>
                <Col
                  xs="2"
                  className="d-flex align-items-center justify-content-center p-2 mx-3 rounded"
                >
                  <p className="mb-0 ml-2">
                    <BiCommentDetail />
                    Video
                  </p>
                </Col>
                <Col
                  xs="2"
                  className="d-flex align-items-center justify-content-center p-2 mx-3 rounded"
                >
                  <p className="mb-0 ml-2">
                    <BiShare />
                    Evento
                  </p>
                </Col>

                <Col
                  xs="2"
                  className="d-flex align-items-center justify-content-center p-2 mx-3 rounded"
                >
                  <p className="mb-0 ml-2">
                    <BiCommentDetail />
                    Scrivi un articolo
                  </p>
                </Col>
              </Row>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};
export default CreatePostNewsPage;
