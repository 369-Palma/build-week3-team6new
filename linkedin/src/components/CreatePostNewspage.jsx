import { Card, Col, Row } from "react-bootstrap";
import { TbPhoto } from "react-icons/tb";
import { BsPlayBtnFill } from "react-icons/bs";
import { RiCalendarEventFill } from "react-icons/ri";
import { MdOutlineArticle } from "react-icons/md";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostsSearch } from "../redux/actions/index";

const CreatePostNewsPage = () => {
  const postInfo = useSelector((state) => state.postInfo);
  const dispatch = useDispatch();

  /*  useEffect(() => {
    dispatch(fetchPostsSearch());
  }, []); */

  return (
    <>
      <div className="d-flex justify-content-center">
        <div style={{ width: "700px", maxWidth: "100%" }}>
          {postInfo.map((post) => (
            <Card key={post?.id} style={{ margin: "1rem 0" }}>
              <Card.Img
                variant="top"
                src={post?.image}
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
                    <TbPhoto />
                    Foto
                  </p>
                </Col>
                <Col
                  xs="2"
                  className="d-flex align-items-center justify-content-center p-2 mx-3 rounded"
                >
                  <p className="mb-0 ml-2">
                    <BsPlayBtnFill />
                    Video
                  </p>
                </Col>
                <Col
                  xs="2"
                  className="d-flex align-items-center justify-content-center p-2 mx-3 rounded"
                >
                  <p className="mb-0 ml-2">
                    <RiCalendarEventFill />
                    Evento
                  </p>
                </Col>

                <Col
                  xs="2"
                  className="d-flex align-items-center justify-content-center p-2 mx-3 rounded"
                >
                  <p className="mb-0 ml-2">
                    <MdOutlineArticle />
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
