import Button from "./universal/Button/Button";
import Card from "./universal/Card/Card";
import Textarea from "./universal/Textarea/Textarea";
export const UploadDetails = () => {
  return (
    <Card className="flex-rubber display-flex flex-direction-column overflow-y-hidden">
      <Textarea className="flex-rubber" />
      <div className="actions-group flex-wooden display-flex align-items-start">
        <Button className="action">Generate</Button>
        {[0, 1, 2, 3].map((_, index) => {
          return (
            <Button className="action" key={index}>
              Action 0{index + 2}
            </Button>
          );
        })}
        <Button className="button-square">Щ</Button>
        <Button className="button-square" icon="favorite" />
        <Button className="button-small ">Small</Button>
        <Button className="button-small button-square">Щ</Button>
        <Button className="button-small button-square" icon="favorite" />
      </div>
    </Card>
  );
};
