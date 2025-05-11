import { useState } from "react";
import { FaFolderOpen, FaRegFolderClosed } from "react-icons/fa6";
import File from "./file";

interface IFolderData {
  name: string;
  isFolder: boolean;
  items?: IFolderData[];
}

interface IFolderProps {
  data: IFolderData;
}

const Folder = ({ data }: IFolderProps) => {
  const [expand, setExpand] = useState(false);

  const handleFolderClick = () => {
    setExpand((prev) => !prev);
  };

  return (
    <div className="pt-2 px-4">
      <div
        className="flex justify-start items-center gap-2 text-slate-100 hover:text-slate-50 cursor-pointer text-xl"
        onClick={handleFolderClick}
      >
        {expand ? <FaFolderOpen /> : <FaRegFolderClosed />}
        <h2>{data.name}</h2>
      </div>

      {expand && (
        <div className="flex flex-col justify-center items-start">
          {data.items?.map((item) =>
            item.isFolder ? <Folder data={item} /> : <File data={item} />
          )}
        </div>
      )}
    </div>
  );
};

export default Folder;
