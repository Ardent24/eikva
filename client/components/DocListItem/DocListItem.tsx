import Button from "../universal/Button/Button";
import Card from "../universal/Card/Card";
import Icon from "../universal/Icon/Icon";
import "./DocListItem.css";
export const DocListItem = () => {
  return (
    <Card>
      <div className="doc-list-item">
        <div className="document-file">
          <Icon name="description" />
          <div className="document-name">Document_01.docx</div>
        </div>
        <Button icon="delete" className="button-square button-small" />
      </div>
    </Card>
  );
};
