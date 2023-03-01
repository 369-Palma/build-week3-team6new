import UserProfile from "./ProfilepageMain";
import AziendeConsultate from "./AziendeConsultate";
import PeopleYouMightKnow from "./PeopleMightKnow";

import { Container, Row, Col } from "react-bootstrap";
import Experiences from "./Experiences";

const Profile = () => {
  return (
    <Container className="d-flex">
      <Row>
        <Col className="col-xs-12 col-md-8 w-100">
          <UserProfile />
          <Experiences />
        </Col>
      </Row>
      <Col className="d-xs-none d-md-block col-md-4 ms-4">
        <AziendeConsultate></AziendeConsultate>
        <PeopleYouMightKnow></PeopleYouMightKnow>
        <Row className="my-2"></Row>
      </Col>
    </Container>
  );
};

export default Profile;
