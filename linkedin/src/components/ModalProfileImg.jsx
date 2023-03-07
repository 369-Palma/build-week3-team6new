import { useState } from "react";
import { Form, Button /* , Modal  */ } from "react-bootstrap";

const ModalProfileImg = () => {
  /* const [lgShowImg, setLgShowImg] = useState(false); */
  const [formData, setFormData] = useState(false);
  const [image, setImage] = useState(null);

  const handleImage = (event) => {
    /*   setFormData((prev) => {
      prev.delete("image");
      prev.append("image", event.target.files[0]);
      return prev;
    }); */
  };

  const handleImageSubmit = async (userId, event) => {
    event.preventDefault();
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNzk0NGYxOTNlNjAwMTM4MDdmNWUiLCJpYXQiOjE2Nzc0OTA1MDAsImV4cCI6MTY3ODcwMDEwMH0.pf9G3SwntDHg3iUJZF-olKYGync7u8VErUGV_JFF91Y",
          },
        }
      );
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
      <h5>Add an image (select the file and press "Add" before saving)</h5>
      <Form onSubmit={handleImageSubmit}>
        <input type="file" onChange={handleImage} />
        <Button className="btn btn-success mt-1">Add</Button>
      </Form>
    </>
  );
};
export default ModalProfileImg;
