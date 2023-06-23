import { NavLink } from "react-router-dom";

type SidebarProps = {
  isOpen: Boolean;
  onClose: () => void;
};

export type LinkType = {
  path: string;
  label: string;
};

const linkList: LinkType[] = [
  {
    path: "/progress-bar",
    label: "Progress Bar",
  },
  {
    path: "/loader",
    label: "Loader",
  },
  {
    path: "/select",
    label: "Select",
  },
];

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <div className={`sidebar ${isOpen ? "isActive" : ""}`}>
      {linkList.map((link) => {
        return (
          <NavLink
            key={link.path}
            onClick={onClose}
            className="sidebar__link"
            to={link.path}
          >
            {link.label}
          </NavLink>
        );
      })}
    </div>
  );
};
export default Sidebar;
