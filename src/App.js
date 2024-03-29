import { useState } from "react";

function App() {
  return <RobotList />;
}

const RobotList = () => {
  const [inputName, setInputName] = useState("");
  const [robots, setRobots] = useState([]);

  const handleClick = () => {
    setRobots([...robots, inputName]);
    setInputName(""); // Clear input field after adding the robot
  };

  const handleRobot = (id) => {
    const filteredRobots = robots.filter((robot) => robot !== id);
    setRobots(filteredRobots);
  };

  return (
    <div className='flex flex-col items-center justify-center mt-10'>
      <div>
        <input
          type="text"
          className="border border-blue p-1 m-2"
          placeholder="Generate Robot"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <button onClick={handleClick} className="border border-blue p-1 m-2">Enter</button>
      </div>
      <div><h2>Robot List</h2></div>
      <div className="flex justify-center flex-wrap">
        {robots.map((robot) => (
          <button key={robot} onClick={() => handleRobot(robot)}>
            <img src={`https://robohash.org/${robot}`} alt="" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;