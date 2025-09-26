import { DocListItem } from "./DocListItem";
import Button from "./universal/Button/Button";
export const DocList = () => {
  return (
    <div className="upload-area flex-wooden display-flex flex-direction-column overflow-y-hidden">
      <div className="doc-list flex-rubber display-flex flex-direction-column overflow-y-auto">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => {
          return <DocListItem key={index} />;
        })}
      </div>
      <Button className="flex-wooden">Upload</Button>
    </div>
  );
};
