import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";


const SingleNews = () => {
    const {id}=useParams();
    return (
      <div>
        <Header></Header>
        <Navbar></Navbar>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 m-10">
          
          <div className="md:col-span-3 ">
            <h2>Dragon News</h2>
            {id.title}
          </div>
          <div>
            <RightSideNav></RightSideNav>
          </div>
        </div>
      </div>
    );
};

export default SingleNews;