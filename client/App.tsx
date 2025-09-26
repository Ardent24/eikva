import { Sidebar } from "./components/Sidebar";
import { CaseList } from "./components/CaseList";
import { DocList } from "./components/DocList";
import { UploadDetails } from "./components/UploadDetails";
import { useState } from "react";
import { MOCK_SIDEBAR_ITEMS } from "./assets/mocks";
import { TutorialWizard } from "./components/TutorialWizard";

function App() {
  const loadScript = (url: string) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = url;
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      script.integrity =
        "sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI";
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
    });
  };

  const [bootstrapLoaded, setBootstrapLoaded] = useState(false);
  if (!bootstrapLoaded) {
    setBootstrapLoaded(true);
    loadScript(
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
    )
      .then(() => {
        console.log("Скрипт загружен");
        // Инициализация после загрузки
      })
      .catch((error) => {
        console.error("Ошибка загрузки скрипта", error);
      });
  }

  const [sidebarItems, setSidebarItems] = useState(MOCK_SIDEBAR_ITEMS.slice());
  const [activeSidebarItemId, setActiveSidebarItemId] = useState(1);
  const handleActivateSidebarItem = (sidebarItemId) => {
    setActiveSidebarItemId(sidebarItemId);
  };
  const [lastSidebarItemId, setLatSidebarItemId] = useState(10);
  const handleDeleteSidebarItem = (sidebarItemId) => {
    setSidebarItems(
      sidebarItems.filter((item) => {
        return item.id !== sidebarItemId;
      })
    );
  };
  const handleAddSidebarItem = () => {
    setSidebarItems([
      ...sidebarItems,
      { id: lastSidebarItemId + 1, title: "New Group" },
    ]);
    setLatSidebarItemId(lastSidebarItemId + 1);
    setActiveSidebarItemId(lastSidebarItemId + 1);
  };

  return (
    <div className="app display-flex overflov-hidden">
      <Sidebar
        sidebarItems={sidebarItems}
        activeSidebarItemId={activeSidebarItemId}
        handleActivateSidebarItem={handleActivateSidebarItem}
        handleDeleteSidebarItem={handleDeleteSidebarItem}
        handleAddSidebarItem={handleAddSidebarItem}
      />
      <main className="main flex-rubber display-flex flex-direction-column">
        <TutorialWizard />
        {/* <CaseList activeSidebarItemId={activeSidebarItemId} /> */}
        <div className="task-area flex-wooden display-flex">
          <UploadDetails />
          <DocList />
        </div>
      </main>
    </div>
  );
}

export default App;
