"use client";

import { Container as ContainerType } from "@/actions/type";
import { FC } from "react";
import { Button, Container, Heading, HighlightSelected, Paragraph } from "./components";
import { useAdminContext } from "../AdminContext/AdminContext";

interface DisplayProps {
  container: ContainerType;
  path?: string[];
}

const Display: FC<DisplayProps> = ({ container, path = [] }) => {
  const { selectedId, setSelectedId } = useAdminContext();

  const props = {
    ...container.props,
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      event.preventDefault();
      event.stopPropagation();
      setSelectedId(container.id || "");
    },
  };

  const component = (() => {
    switch (container.component) {
      case "Container":
        return (
          <Container path={[...path, container.id || ""]} {...props}>
            {container.instances.map((eachInstance) => (
              <Display key={container.id} container={eachInstance} />
            ))}
          </Container>
        );
      case "Heading":
        return <Heading {...props} />;
      case "Paragraph":
        return <Paragraph {...props} />;
      case "Button":
        return <Button {...props} />;
      default:
        return (
          <div>
            {container.id} : {JSON.stringify(container.props)}
          </div>
        );
    }
  })();

  return selectedId === container.id ? <HighlightSelected>{component}</HighlightSelected> : component;
};

export default Display;
