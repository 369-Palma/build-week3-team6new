import { useState } from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";

function PostEditModal({ post, onSave }) {
  const [show, setShow] = useState(false);
  const [text, setText] = useState(post.text);
  const [image, setImage] = useState(null);
  const [formData, setformData] = useState(new FormData());

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = async () => {
    const updatedPost = await updatePost(post._id, text);
    onSave(updatedPost); // Chiamiamo la funzione onSave con il post aggiornato senza reload pagina
    handleClose();
  };

  // Fetch per aggiornare un nostro post già creato precedentemente.
  const updatePost = async (postId, newText) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.REACT_APP_API_KEY,
        },
        body: JSON.stringify({
          text: newText,
        }),
      });

      if (response.ok) {
        alert("Post edited correctly!");
      }

      const updatedPost = await response.json();
      return updatedPost;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleImageChange = (event) => {
    event.preventDefault();
    setformData((prev) => {
      prev.delete("post");
      prev.append("post", event.target.files[0]);
      return prev;
    });
  };

  // Fetch per aggiungere un'immagine ad un nostro post già creato precedentemente.
  const handleImageUpload = async (postId, event) => {
    event.preventDefault();
    try {
      formData.append("post", image);

      let response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: process.env.REACT_APP_API_KEY,
        },
      });
      if (response.ok) {
        alert("Image uploaded!");
        setImage(null);
      } else {
        console.log("error");
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Col xs="2" className="d-flex align-items-center justify-content-center p-2 mx-2 rounded">
        <div className="mb-0 ml-2" onClick={handleShow} style={{ cursor: "pointer" }}>
          <BiEdit /> Edit Post
        </div>
      </Col>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Change the text</h5>
          <Form.Control as="textarea" value={text} onChange={(e) => setText(e.target.value)} />
          <h5>Add an image (select the file and press "Add" before saving)</h5>
          <form onSubmit={(e) => handleImageUpload(post._id, e)}>
            <input type="file" onChange={handleImageChange} />
            <button className="btn btn-success mt-1">Add</button>
          </form>
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
