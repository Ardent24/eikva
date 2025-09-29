import Button from "./universal/Button/Button";
import Card from "./universal/Card/Card";
import Icon from "./universal/Icon/Icon";
export const TutorialWizard = () => {
  return (
    <div className="tutorial-wizard flex-rubber display-flex flex-direction-column justify-content-center">
      <Card className="tutorial-step display-flex justify-content-space-between active">
        <div>1. Sign up or sign in for group display</div>
        <Icon name="check_box" />
      </Card>
      <Card className="tutorial-step display-flex justify-content-space-between active">
        <div>
          2. Create new group, view groups of other authors or open for edit
          your group
        </div>
        <Icon name="check_box" />
      </Card>
      <Card className="tutorial-step">
        3. Write your task and click "Generate" button
      </Card>
      <Card className="tutorial-step">
        4. You can load some documents before generation
      </Card>
      <Card className="tutorial-step">5. Expand card for detailed info</Card>
      <Card className="tutorial-step">
        6. Check correct cards for including card in export list
      </Card>
      <Card className="tutorial-step">
        7. Remove wrong cards for exlusion card from group
      </Card>
      <Card className="tutorial-step">8. Edit expanded card</Card>
      <Card className="tutorial-step">9. Refine editable card</Card>
      <Card className="tutorial-step">10. Export yor groups in other apps</Card>
    </div>
  );
};
