const BaseTab = () => {
  return (
      <>
        <div className="flex gap-3 bg-zinc-400 p-3 rounded-md opacity-70">
        <button className=" font-bold bg-orange-500 bg-opacity-80 rounded-md p-2 px-4 hover:bg-orange-300">Project</button>
          <button className=" font-bold bg-orange-500 bg-opacity-80 rounded-md p-2 px-4">About</button>
        </div>
      </>
  );
};

export default BaseTab;
