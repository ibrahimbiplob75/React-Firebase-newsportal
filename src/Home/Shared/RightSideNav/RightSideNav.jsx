import { FaGoogle, FaGithub, FaFacebook,  FaTwitter, FaInstagram } from "react-icons/fa";
import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png"
import qzone3 from "../../../assets/qZone3.png"
const RightSideNav = () => {
  return (
    <div>
      <div>
        <h2 className="text-2xl font-Poppins">LogIn With</h2>

        <button className="btn btn-outline btn-primary w-full mt-4">
          <FaGoogle></FaGoogle>
          Login With Google
        </button>
        <button className="btn btn-outline btn-secondary w-full mt-4">
          <FaGithub></FaGithub>
          Login With Github
        </button>
      </div>

      <div>
        <h1 className="text-2xl font-Poppins mt-10 mb-5">Find Us On</h1>
        <button className="btn btn-outline btn-info w-full flex space-y-4 ">
          <FaFacebook></FaFacebook>
          Facebook
        </button>
        <button className="btn btn-outline btn-success w-full flex space-y-4 mt-2">
          <FaTwitter></FaTwitter>
          Twitter
        </button>
        <button className="btn btn-outline btn-warning w-full flex space-y-4 mt-2">
          <FaInstagram></FaInstagram>
          Instragram
        </button>
      </div>

      <div className="bg-[#ebeaea] mt-12">
        <h1 className="text-2xl font-Poppins p-6">Q-Zone</h1>
        <img className="w-3/4 mx-auto mt-5" src={qzone1} alt="" />
        <img className="w-3/4 mx-auto mt-5" src={qzone2} alt="" />
        <img className="w-3/4 mx-auto mt-5" src={qzone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
