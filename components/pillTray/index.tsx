import { Dispatch, SetStateAction, useState } from "react";

const Pill = ({
  text,
  selection,
}: {
  text: string;
  selection: [string, Dispatch<SetStateAction<string>>];
}) => {
  const [state, setState] = selection;
  const isSelected = state === text;

  return (
    <div
      className={`p-2 justify-items-center items-center rounded-full m-1 cursor-pointer ${
        isSelected ? "bg-white" : "bg-gray-800"
      }`}
      onClick={() => setState(text)}
    >
      <p className={`m-0 ${isSelected ? "text-black" : "text-white"}`}>
        {text}
      </p>
    </div>
  );
};

const Tray = () => {
  const selection = useState("All");

  return (
    <div className="flex w-full overflow-auto flex-row">
      {["All", "5 minutes", "Audio Podcast", "Videos", "Playlists"].map(
        (text) => (
          <Pill key={text} text={text} selection={selection} />
        )
      )}
    </div>
  );
};

export default Tray;
