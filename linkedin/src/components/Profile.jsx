import UserProfile from "./ProfilepageMain";
import AziendeConsultate from "./AziendeConsultate";
import PeopleYouMightKnow from "./PeopleMightKnow";

import { Container, Row, Col } from "react-bootstrap";
import Experiences from "./Experiences";

const Profile = () => {
  return (
    <Container className="d-flex mt-4">
      <Row>
        <Col className="col-xs-12 col-md-8 w-100">
          <UserProfile />
          <Experiences />
        </Col>
      </Row>

      <Row className="d-none d-lg-block col-md-4 ms-4">
        <Col>
          <AziendeConsultate></AziendeConsultate>
        </Col>
        <Col>
          <PeopleYouMightKnow></PeopleYouMightKnow>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
