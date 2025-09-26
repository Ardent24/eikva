import { useEffect, useState } from "react";
import Button from "./universal/Button/Button";
import Card from "./universal/Card/Card";
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
        className="sidebar-item display-flex overflow-x-hidden align-items-center"
        onMouseEnter={() => {
          setShowButton(true);
        }}
        onMouseLeave={() => {
          setShowButton(false);
        }}
        onClick={handleActivateSidebarItem}
      >
        <div className="flex-rubber">{title}</div>
        {(isActive || showButton) && (
          <Button
            icon="more_vert"
            className="button-small button-square flex-wooden"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            type="button"
          />
        )}
      </div>
    </Card>
  );
};
