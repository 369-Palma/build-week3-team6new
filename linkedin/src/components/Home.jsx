import NewsFeed from "./NewsFeed";
/* import Searchbar from "./Searchbar"; */
import StartAPost from "./CreatePostNewspage";

const Home = () => {
  return (
    <>
      <StartAPost />
      {/* <Searchbar /> */}
      <NewsFeed />
    </>
  );
};

export default Home;
