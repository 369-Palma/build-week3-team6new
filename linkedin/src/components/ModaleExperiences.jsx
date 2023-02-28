import { useState } from "react";

const Experiences = () => {
  const [dataExperiences, setDataExperiences] = useState([]);
};

const [experience, setExperience] = useState({
  role: "",
  company: "",
  startDate: "",
  endDate: "" || null,
  description: "",
  area: "",
});
