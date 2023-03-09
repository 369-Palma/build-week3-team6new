import React, { useState } from "react";

const UpdatePropic = ({ userId }) => {
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append("profile", file);

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: process.env.REACT_APP_API_KEY,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // Da aggiornare la parte grafica, per il momento la lascio così
    <div>
      <button onClick={() => setShowModal(true)}>Update Profile Picture</button>
      {showModal && (
        <div>
          <form onSubmit={handleSubmit}>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdatePropic;
