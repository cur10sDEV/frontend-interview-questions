import { FaFile } from "react-icons/fa6";

interface IFileData {
  name: string;
  isFolder: boolean;
}

interface IFileProps {
  data: IFileData;
}
const File = ({ data }: IFileProps) => {
  return (
    <div className="flex justify-start items-center gap-2 text-slate-300 hover:text-slate-50 cursor-pointer text-xl pt-2 px-4">
      <FaFile />
      <h2>{data.name}</h2>
    </div>
  );
};

export default File;
