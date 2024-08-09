"use client";

import { FC } from "react";
import { Container as ContainerType } from "@/actions/type";
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
      if (container.id === "global") setSelectedId("");
      else setSelectedId(container.id || "");
    },
  };

  const component = (() => {
    switch (container.component) {
      case "Container":
        return (
          <Container path={[...path, container.id || ""]} {...props}>
            {container.instances.map((eachInstance) => (
              <Display key={container.id} path={[...path, container.id || ""]} container={eachInstance} />
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

  return (
    <HighlightSelected
      isHighlight={selectedId === container.id}
      isGlobal={container.id === "global"}
      isContainer={container.component === "Container"}
      onClick={(event) => props.onClick(event)}
    >
      {component}
    </HighlightSelected>
  );
};

export default Display;
