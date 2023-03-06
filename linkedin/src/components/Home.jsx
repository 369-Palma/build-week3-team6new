import NewsFeed from "./NewsFeed";
/* import Searchbar from "./Searchbar"; */
import StartAPost from "./CreatePostNewspage";
import { useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";

const Home = () => {
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <>
      <StartAPost />
      {/* <Searchbar /> */}
      {isLoading && (
        <Spinner animation="border" variant="primary" className="my-2" />
      )}
      <NewsFeed />
    </>
  );
};

export default Home;
