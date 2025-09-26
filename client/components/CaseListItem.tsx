import { useState } from "react";
import Button from "./universal/Button/Button";
import Card from "./universal/Card/Card";
import Textarea from "./universal/Textarea/Textarea";
export const CaseListItem = ({
  caseId,
  detailedCase,
  handleActivateCase,
  handleDisactivateCase,
  handleDeleteCase,
  isActive,
  ...props
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [caseField, setCaseField] = useState(
    `${caseId + 1}. ${detailedCase.name}\nAuthor: ${
      detailedCase.author
    }\nCreation date: ${detailedCase.creationDate}\nPrecondition: ${
      detailedCase.precondition
    }\nSteps:\n  Step 1:\n    Description: To do something\n    Expected result: Everythyng should work\n  Step 2:\n    Description: To do something\n    Expected result: Everythyng should work\n  Step 3:\n    Description: To do something\n    Expected result: Everythyng should work\nPostcondition: ${
      detailedCase.postcondition
    }\nStatus: ${detailedCase.status}`
  );
  const [refineField, setRefineField] = useState("Refine...");
  return (
    <Card
      className={
        isActive
          ? "active display-flex flex-direction-column overflow-y-hidden"
          : "display-flex flex-direction-column overflow-y-hidden"
      }
    >
      <div className="flex-rubber">
        <div className="case-header display-flex align-items-start">
          <div className="flex-rubber display-flex flex-direction-column">
            <div>
              {caseId + 1}. {detailedCase.name}
            </div>
            <div className="display-flex justify-content-space-between">
              <div>Author: {detailedCase.author}</div>
              <div>Creation date: {detailedCase.creationDate}</div>
              <div>Status: {detailedCase.status}</div>
            </div>
          </div>
          <div className="flex-wooden display-flex">
            <Button
              icon={isExpanded ? "expand_less" : "expand_more"}
              className="button-small button-square"
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
                if (isExpanded && isActive) {
                  handleDisactivateCase();
                }
              }}
            />
            <Button
              icon={isApproved ? "check_box" : "check_box_outline_blank"}
              className="button-small button-square"
              onClick={(e) => {
                e.stopPropagation();
                setIsApproved(!isApproved);
              }}
            />
            <Button
              icon="delete"
              className="button-small button-square"
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteCase();
              }}
            />
          </div>
        </div>
        {/* <Textarea
          value={caseField}
          onChange={(e) => {
            setCaseField(e.target.value);
          }}
          onClick={() => {
            if (isExpanded && !isActive) {
              handleActivateCase();
            }
          }}
          className="height-100"
          style={{
            cursor:
              (isExpanded && isActive && "text") ||
              (isExpanded && !isActive && "pointer") ||
              "default",
            height: isExpanded ? "26.125rem" : "5.75rem",
          }}
        >
          {caseField}
        </Textarea> */}
      </div>
      {/* {isActive && isExpanded && (
        <div className="flex-wooden position-relative">
          <Textarea
            value={refineField}
            onChange={(e) => {
              setRefineField(e.target.value);
            }}
            className="refine-textarea"
            style={{
              padding: "1rem",
              height: "6rem",
            }}
          />
          <Button
            icon="send"
            className="position-absolute button-small button-square"
            style={{ bottom: "0.5rem", right: "0.5rem" }}
            onClick={(e) => {
              setCaseField(
                caseField +
                  `\n Additional information about ${refineField}: additional information...`
              );
            }}
          />
        </div>
      )} */}
    </Card>
  );
};
