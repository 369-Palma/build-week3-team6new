/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { fetchPosts } from "../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";
import { Card, Col, Row } from "react-bootstrap";
import { FiThumbsUp } from "react-icons/fi";
import { BiCommentDetail, BiShare } from "react-icons/bi";

function NewsFeed() {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts);
  // console.log(post)

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  // const randomPosts = Array.from(
  //   { length: 15 },
  //   () => post[Math.floor(Math.random() * post.length)]
  // );

  return (
    <div className="d-flex justify-content-center">
      <div style={{ width: "700px", maxWidth: "100%" }}>
        {post.map((post) => (
          <Card key={post?.id} style={{ margin: "1rem 0" }}>
            <Card.Img variant="top" src={post?.user?.image} alt="foto" className="fotoTonde ms-2" />
            <Card.Body>
              <Card.Title>{post?.username} said:</Card.Title>
              <Card.Text>{post?.text}</Card.Text>
              {post?.image ? <Card.Img variant="bottom" src={post?.image} alt="fotopost" /> : null}
            </Card.Body>
            <hr className="my-1" />
            <Row className="text-muted post-actions justify-content-center">
              <Col xs="2" className="d-flex align-items-center justify-content-center p-2 mx-3 rounded">
                <p className="mb-0 ml-2 text-primary">
                  <FiThumbsUp />
                  Like
                </p>
              </Col>
              <Col xs="2" className="d-flex align-items-center justify-content-center p-2 mx-3 rounded">
                <p className="mb-0 ml-2">
                  <BiCommentDetail />
                  Comment
                </p>
              </Col>
              <Col xs="2" className="d-flex align-items-center justify-content-center p-2 mx-3 rounded">
                <p className="mb-0 ml-2">
                  <BiShare />
                  Share
                </p>
              </Col>
            </Row>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default NewsFeed;
