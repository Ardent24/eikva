import { useState } from "react";
import { SidebarItem } from "./SidebarItem";
import Button from "./universal/Button/Button";
export const Sidebar = ({
  sidebarItems,
  activeSidebarItemId,
  handleActivateSidebarItem,
  handleDeleteSidebarItem,
  handleAddSidebarItem,
}) => {
  const [isAuth, setIsAuth] = useState(true);
  return (
    <aside className="sidebar flex-wooden display-flex flex-direction-column overflow-y-hidden">
      <div className="logo display-flex align-items-center">
        <div className="logo-image" />
        <div className="logo-brand">aIQa (Эйква)</div>
      </div>
      <Button onClick={handleAddSidebarItem}>Create Group</Button>
      <div className="case-group-list flex-rubber display-flex flex-direction-column overflow-y-auto">
        {isAuth &&
          sidebarItems.map((sidebarItem, index) => {
            return (
              <SidebarItem
                key={index}
                title={sidebarItem.title}
                isActive={sidebarItem.id === activeSidebarItemId}
                handleActivateSidebarItem={() => {
                  handleActivateSidebarItem(sidebarItem.id);
                }}
                handleDeleteSidebarItem={() => {
                  handleDeleteSidebarItem(sidebarItem.id);
                }}
              />
            );
          })}
      </div>
      <Button>{isAuth ? "Sign out" : "Sign in"}</Button>
    </aside>
  );
};
