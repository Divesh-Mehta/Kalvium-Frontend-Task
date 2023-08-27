import { Link } from "react-router-dom";
import Form from "./Form.jsx"

const Home = () => {
  return (
    <div className="bg-[#C4EFDD] bg-[url(../src/assets/background.svg)] bg-no-repeat h-[100vh] bg-bottom bg-contain">
      <div className="flex justify justify-between px-8 py-4">
        <div className="item-start w-40 h-8">
          <img src="../src/assets/kalvium.svg" alt="" />
        </div>

        <div>
          <div>
            <button className="bg-[#FFCE6D] font-bold text-2xl p-2 rounded-xl ">
              <p className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)] hover:drop-shadow-[0]">History</p>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-16">
        <div className="font-bold text-6xl w-[88vh] text-center">
          <h1>
            Monitor Your <span className="text-[#3E18A9]">Students</span> Hassel
            Free
          </h1>
        </div>

        <div className="bg-red-500 rounded-2xl pb-1 hover:pb-0 ease-in duration-150 transition-all">
         <Link to="./form">
         <button className=" bg-blue-700 rounded-2xl p-2 h-12 w-40 text-center font-bold text-white">
            <p className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:drop-shadow-[0]">
              Mark Attendance
            </p>
       
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
