import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    navigate("/success");
  };
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center bg-[#C4EFDD] bg-[url(../src/assets/background.svg)] bg-no-repeat bg-bottom bg-contain">
        <form className="py-10 px-4 flex flex-col gap-4 items-center justify-center bg-blue-700 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100" onSubmit={handleSubmit}>
          <h1 className="font-bold text-5xl w-[88vh] text-center ">
            Attendence Form
          </h1>
          <h2 className="font-bold text-lg w-[88vh] text-center">
            Mark your Attendence Properly
          </h2>

          <div className="justify-start flex flex-col gap-4">
            <label className="font-bold text-md">Your Name</label>
            <input
              className="pl-2 border-[0.1rem] rounded-[8px]"
              type="text"
              placeholder="Enter your Full Name"
              required
            />

            <label className="font-bold text-md">Student E-mail</label>
            <input
              className="pl-2 border-[0.1rem] rounded-[8px]"
              type="email"
              placeholder="ex: mystudid@example.edu.in"
              required
            />

            <label className="font-bold text-md" >Your Register Number</label>
            <input
              className="pl-2 border-[0.1rem] rounded-[8px]"
              type="text"
              placeholder="Enter your Register Number"
              required
            />

            <div className="flex justify-between gap-4">
              <label className="font-bold text-md pr-2">Department</label>
              <select className=" pl-2 rounded-[8px] border-[0.1rem]">
                <option value="button 1">C-TECH</option>
                <option value="button 2">C-INTEL</option>
                <option value="button 3">C-SECURITY</option>
              </select>

              <label className="font-bold text-md pl-2 pr-2">Your Class</label>
              <select className=" pl-2 rounded-[8px] border-[0.1rem]">
                <option value="button 1">Class A</option>
                <option value="button 2">Class B</option>
                <option value="button 3">Class C</option>
              </select>
            </div>

            <label className="font-bold text-md">Status</label>
            <select className=" pl-2 rounded-[8px] border-[0.1rem]">
                <option value="button 1">Present</option>
                <option value="button 2">Absent</option>
              </select>
            <div className="flex justify-center">
            <div className="bg-red-500 rounded-2xl pb-1 hover:pb-0 ease-in duration-150 transition-all">
              <button type="submit" className=" bg-blue-700 rounded-2xl p-2 h-12 w-40 text-center font-bold text-white"  >
                <p className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:drop-shadow-[0]">
                  Submit
                </p>
              </button>
            </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
