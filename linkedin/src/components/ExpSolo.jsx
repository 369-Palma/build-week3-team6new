import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const ExpSolo = () => {
    const experiences = useSelector((state) => state.contentExp);

    const deleteExp = async (expId) => {
        try {
            const res = await fetch(
                `https://striveschool-api.herokuapp.com/api/profile/63fc702df193e60013807f5a/experiences/${expId}`,
                {
                    method: "DELETE",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNzAyZGYxOTNlNjAwMTM4MDdmNWEiLCJpYXQiOjE2Nzc0ODgxNzMsImV4cCI6MTY3ODY5Nzc3M30.v4RvPvwPrNqMf1jT8g6IRxX0XpB361UjIv66UzPhULY",
                    },
                }
            );
            if (res.ok) {
                // do something 
            } else {
                console.log("Badoglio!");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container>
            {experiences.map((exp) => (
                <Row key={exp._id} className="d-flex text-start">
                    <Col >
                        <h1>{exp._id} </h1>
                        <h4>{exp.role}</h4>
                        <h4>{exp.company}</h4>
                        <p>{exp.description}</p>
                        <p>{exp.startDate}</p>
                        <p>{exp.area}</p>
                    </Col>
                    <Col>
                        <Button variant="danger"
                            onClick={() => deleteExp(exp._id)}
                        >
                            Delete
                        </Button>
                    </Col>
                </Row>
            ))
            }
        </Container >
    );
};

export default ExpSolo;