import CreateUser from "../features/user/CreateUser.jsx";
import { useSelector } from "react-redux";
import Button from "./Button.jsx";
import { useLocation } from "react-router-dom";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className={"my-10 px-4 text-center text-yellow-100 sm:my-16"}>
      <h1 className={"mb-8 text-xl font-semibold md:text-3xl"}>
        The best pizza.
        <br />
        <span className={"text-yellow-500"}>
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to={"/menu"} type={"primary"}>
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
