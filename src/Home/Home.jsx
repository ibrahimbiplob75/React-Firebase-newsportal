import { useLoaderData } from "react-router-dom";
import Header from "./Shared/Header/Header";
import LeftSideNav from "./Shared/LeftSideNav/LeftSideNav";
import Navbar from "./Shared/Navbar/Navbar";
import RightSideNav from "./Shared/RightSideNav/RightSideNav";
import NewsCard from "./NewsCard/NewsCard";



const Home = () => {
  const newsDatas=useLoaderData();
  console.log(newsDatas);
    return (
      <div>
        <Header></Header>
        <Navbar></Navbar>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 m-10">
          <div>
            <LeftSideNav></LeftSideNav>
          </div>
          <div className="md:col-span-2 ">
            {newsDatas.map((newsData) => (
              <NewsCard key={newsData._id} newsData={newsData}></NewsCard>
            ))}
          </div>
          <div>
            <RightSideNav></RightSideNav>
          </div>
        </div>
      </div>
    );
};

export default Home;