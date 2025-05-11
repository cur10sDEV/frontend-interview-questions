import { filesData } from "../../data/files-data";
import Folder from "./folder";

const Sidebar = () => {
  return (
    <div>
      <Folder data={filesData} />
    </div>
  );
};

export default Sidebar;
