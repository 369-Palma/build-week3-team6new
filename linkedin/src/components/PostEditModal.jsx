import { useState } from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";

function PostEditModal({ post, onSave }) {
  const [show, setShow] = useState(false);
  const [text, setText] = useState(post.text);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = async () => {
    const updatedPost = await updatePost(post._id, text);
    onSave(updatedPost.text);
    handleClose();
  };

  // Fetch per aggiornare un nostro post già creato precedentemente.
  const updatePost = async (postId, newText) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNzk0NGYxOTNlNjAwMTM4MDdmNWUiLCJpYXQiOjE2Nzc0OTA1MDAsImV4cCI6MTY3ODcwMDEwMH0.pf9G3SwntDHg3iUJZF-olKYGync7u8VErUGV_JFF91Y",
        },
        body: JSON.stringify({
          text: newText,
        }),
      });

      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }

      const updatedPost = await response.json();
      return updatedPost;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Col xs="2" className="d-flex align-items-center justify-content-center p-2 mx-2 rounded">
        <div className="mb-0 ml-2" onClick={handleShow} style={{ cursor: "pointer" }}>
          <BiEdit /> Edit
        </div>
      </Col>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control as="textarea" value={text} onChange={(e) => setText(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PostEditModal;
