import { useLocation, useNavigate } from "react-router-dom";

const Home = (props) => {
  const location = useLocation();

  const navigate = useNavigate();

  const handelClickGoToFool = () => {
    // logic
    console.log("Logic Done");
    navigate("/product/foll/25", { replace: true });
  };
  return (
    <>
      <div className="image_up position-relative">
        <h1 id="wellcome_home" className="text-center ">
          Wellcome To Home
        </h1>
        <img
          id="image_home"
          src="image_processing20200827-13093-iyvvnf.png"
        ></img>
      </div>
      <div
        onClick={handelClickGoToFool}
        className="btn_fool position-absolute top-50 start-50 translate-middle btn btn-danger "
      >
        Go To Fool
      </div>
    </>
  );
};

export default Home;
