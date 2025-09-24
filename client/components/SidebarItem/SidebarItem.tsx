import { useEffect, useState } from "react";
import Button from "../universal/Button/Button";
import "./SidebarItem.css";
import Card from "../universal/Card/Card";
export const SidebarItem = ({
  title,
  isActive,
  handleActivateSidebarItem,
  handleDeleteSidebarItem,
  ...props
}) => {
  const [showButton, setShowButton] = useState(false);

  return (
    <Card className={isActive && "active"}>
      <div
        className="sidebar-item"
        onMouseEnter={() => {
          setShowButton(true);
        }}
        onMouseLeave={() => {
          setShowButton(false);
        }}
        onClick={handleActivateSidebarItem}
      >
        <div>{title}</div>
        {(isActive || showButton) && (
          <>
            {/* <div className="dropdown"> */}
            <Button
              icon="more_vert"
              className="button-small button-square"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              type="button"
            />
            {/* <ul className="dropdown-menu">
              <li>
                <button className="dropdown-item">Rename</button>
              </li>
              <li>
                <button className="dropdown-item">Save XLSX</button>
              </li>
              <li>
                <button className="dropdown-item">Save DOCX</button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={handleDeleteSidebarItem}
                >
                  Delete Group
                </button>
              </li>
            </ul>
          </div> */}
          </>
        )}
      </div>
    </Card>
  );
};
