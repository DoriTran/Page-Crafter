import { Container } from "@/actions/type";
import { FC } from "react";
import { Button, Heading, Paragraph } from "./components";

interface DisplayProps {
  container: Container;
}

const Display: FC<DisplayProps> = ({ container }) => {
  if (container.component !== "Container") {
    switch (container.component) {
      case "Heading":
        return <Heading {...container.props} />;
      case "Paragraph":
        return <Paragraph {...container.props} />;
      case "Button":
        return <Button {...container.props} />;
      default:
        return (
          <div>
            {container.id} : {JSON.stringify(container.props)}
          </div>
        );
    }
  }

  return (
    <div style={container.props}>
      {container.instances.map((eachInstance) => (
        <Display key={container.id} container={eachInstance} />
      ))}
    </div>
  );
};

export default Display;
