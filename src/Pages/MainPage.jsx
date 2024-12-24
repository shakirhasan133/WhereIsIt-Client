import { Carusal } from "../Components/Carusel";
import LatestItems from "../Components/LatestItems";
import HighlightedStories from "../Components/HighlightedStories";
import CommunityStats from "../Components/CommunityStats";
import HowItWorks from "../Components/HowItWorks";
import { Helmet } from "react-helmet";

const MainPage = () => {
  return (
    <div>
      <Helmet>
        <title>WhereIsIt</title>
      </Helmet>
      <Carusal></Carusal>
      <LatestItems></LatestItems>
      <HowItWorks></HowItWorks>
      <div className="bg-blue-gray-100">
        <CommunityStats></CommunityStats>
      </div>
      <HighlightedStories></HighlightedStories>
    </div>
  );
};

export default MainPage;
