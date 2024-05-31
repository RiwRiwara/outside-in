import { FC } from "react";
import { ClipLoader } from "react-spinners";

const Loading: FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <ClipLoader color="#36d7b7" />
    </div>
  );
};

export default Loading;