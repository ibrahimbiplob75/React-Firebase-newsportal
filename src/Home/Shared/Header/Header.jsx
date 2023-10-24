
import image from "../../../assets/logo.png"
import moment from "moment";
import Marquee from "react-fast-marquee";


const Header = () => {
    return (
      <div className="text-center mt-8">
        <img className="mx-auto" src={image}></img>
        <h2 className="text-xl mt-3">Journalism Without Fear or Favour</h2>
        <h1 className="mt-4">{moment().format("LLLL")}</h1>
        <div className="flex w-1/2 mx-auto border mt-5">
          <button className="btn btn-accent ">Latest</button>
          <Marquee pauseOnClick>
            I can be a React component, multiple React components, or just some
            text.
          </Marquee>
        </div>
      </div>
    );
};

export default Header;