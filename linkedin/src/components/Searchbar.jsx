import { Card, Col, Row, Form } from "react-bootstrap";
import {
  FcClapperboard,
  FcPicture,
  FcPlanner,
  FcViewDetails,
} from "react-icons/fc";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostsSearch } from "../redux/actions/index";
import { useEffect } from "react";

const Searchbar = () => {
  const postInfo = useSelector((state) => state.postInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsSearch());
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center">
        <div style={{ width: "700px", maxWidth: "100%" }}>
          <Card key={postInfo?.id} style={{ margin: "1rem 0" }}>
            <Card.Img
              variant="top"
              src={postInfo?.image}
              alt="foto"
              className="fotoTonde ms-2"
            />
            <Card.Body>
              <Form /* onSubmit={handleSubmit} */ className="my-4 ">
                <Form.Control
                  className="nav-pills"
                  type="search"
                  placeholder="Avvia un post"

                  /* value={}
              onChange={handleChange} */
                />
              </Form>
            </Card.Body>

            <Row className="text-muted post-actions justify-content-center">
              <Col
                xs="2"
                className="d-flex align-items-center justify-content-center p-2 mx-3 rounded"
              >
                <p className="mb-0 ml-2 text-primary">
                  <FcPicture size={26} />
                  Foto
                </p>
              </Col>
              <Col
                xs="2"
                className="d-flex align-items-center justify-content-center p-2 mx-3 rounded"
              >
                <p className="mb-0 ml-2">
                  <FcClapperboard size={26} />
                  Video
                </p>
              </Col>
              <Col
                xs="2"
                className="d-flex align-items-center justify-content-center p-2 mx-3 rounded"
              >
                <p className="mb-0 ml-2">
                  <FcPlanner size={26} />
                  Eventi
                </p>
              </Col>

              <Col
                xs="2"
                className="d-flex align-items-center justify-content-center p-2 mx-3 rounded"
              >
                <p className="mb-0 ml-2">
                  <FcViewDetails size={26} />
                  Scrivi un articolo
                </p>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    </>
  );
};
export default Searchbar;
