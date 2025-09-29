import { useState } from "react";
import { MOCK_CASE } from "../assets/mocks";
import { CaseListItem } from "./CaseListItem";
export const CaseList = ({ activeSidebarItemId }) => {
  const [activeCase, setActiveCase] = useState(null);
  const [cases, setCases] = useState([0, 1, 2, 3, 4]);
  const [newGroupCases, setNewGroupCases] = useState([]);

  return (
    <div className="case-list flex-rubber display-flex flex-direction-column  overflow-y-auto">
      {activeSidebarItemId !== null &&
        activeSidebarItemId < 11 &&
        cases.map((caseItem) => {
          return (
            <CaseListItem
              key={caseItem}
              caseId={caseItem}
              detailedCase={MOCK_CASE}
              handleActivateCase={() => {
                if (caseItem === activeCase) {
                  setActiveCase(null);
                } else {
                  setActiveCase(caseItem);
                }
              }}
              handleDisactivateCase={() => {
                setActiveCase(null);
              }}
              handleDeleteCase={() => {
                setCases(
                  cases.filter((item) => {
                    return item !== caseItem;
                  })
                );
                console.log("unregistred handleDeleteCase");
              }}
              isActive={activeCase === caseItem}
            />
          );
        })}
      {activeSidebarItemId >= 11 &&
        newGroupCases.map((caseItem) => {
          return (
            <CaseListItem
              key={caseItem}
              caseId={caseItem}
              detailedCase={MOCK_CASE}
              handleActivateCase={() => {
                if (caseItem === activeCase) {
                  setActiveCase(null);
                } else {
                  setActiveCase(caseItem);
                }
              }}
              handleDisactivateCase={() => {
                setActiveCase(null);
              }}
              handleDeleteCase={() => {
                setCases(
                  cases.filter((item) => {
                    return item !== caseItem;
                  })
                );
                console.log("unregistred handleDeleteCase");
              }}
              isActive={activeCase === caseItem}
            />
          );
        })}
    </div>
  );
};
