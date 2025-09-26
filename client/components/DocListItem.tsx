import Button from "./universal/Button/Button";
import Card from "./universal/Card/Card";
import Icon from "./universal/Icon/Icon";
export const DocListItem = () => {
  return (
    <Card className="doc-list-item display-flex align-items-center">
      <div className="document-file flex-rubber display-flex">
        <Icon name="description" className="flex-wooden" />
        <div className="document-name flex-rubber">Document_01.docx</div>
      </div>
      <Button
        icon="delete"
        className="button-square button-small flex-wooden"
      />
    </Card>
  );
};
