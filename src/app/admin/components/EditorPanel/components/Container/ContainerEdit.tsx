"use client";

import { FC } from "react";
import { ApCheckbox, ApInput, ApRadioGroup } from "@/components";
import { useAdminContext } from "../../../AdminContext/AdminContext";
import LabelWrapper from "../../LabelWrapper";
import { EditorProps } from "../../Editor";

const ContainerEdit: FC<EditorProps> = ({ instance }) => {
  const { setInstanceById } = useAdminContext();

  return (
    <>
      <LabelWrapper label="Width (px, vw, rem, %, ...):">
        <ApInput
          value={instance.props.width}
          setValue={(value: any) => setInstanceById({ ...instance, props: { ...instance.props, width: value } })}
          placehoder="Container Width"
          width="80%"
        />
      </LabelWrapper>
      <LabelWrapper label="Height (px, vw, rem, %, ...):">
        <ApInput
          value={instance.props.height}
          setValue={(value: any) => setInstanceById({ ...instance, props: { ...instance.props, height: value } })}
          placehoder="Container Height"
          width="80%"
        />
      </LabelWrapper>
      <LabelWrapper label="Display:">
        <ApRadioGroup
          value={instance.props.display || "block"}
          setValue={(value) => setInstanceById({ ...instance, props: { ...instance.props, display: value } })}
          horizontal
          options={[
            { label: "Block", value: "block" },
            { label: "Flex", value: "flex" },
          ]}
        />
      </LabelWrapper>
      {instance.props.display === "flex" && (
        <>
          <LabelWrapper label="Flex direction:">
            <ApRadioGroup
              value={instance.props.flexDirection || "row"}
              setValue={(value) =>
                setInstanceById({ ...instance, props: { ...instance.props, flexDirection: value } })
              }
              horizontal
              options={[
                { label: "Horizontal", value: "row" },
                { label: "Vertical", value: "column" },
              ]}
            />
          </LabelWrapper>
          <LabelWrapper label="Justify content:">
            <ApRadioGroup
              value={instance.props.justifyContent || "flex-start"}
              setValue={(value) =>
                setInstanceById({ ...instance, props: { ...instance.props, justifyContent: value } })
              }
              horizontal
              options={[
                { label: "Start", value: "flex-start" },
                { label: "Center", value: "center" },
                { label: "End", value: "flex-end" },
              ]}
            />
          </LabelWrapper>
          <LabelWrapper label="Align Items:">
            <ApRadioGroup
              value={instance.props.alignItems || "flex-start"}
              setValue={(value) =>
                setInstanceById({ ...instance, props: { ...instance.props, alignItems: value } })
              }
              horizontal
              options={[
                { label: "Start", value: "flex-start" },
                { label: "Center", value: "center" },
                { label: "End", value: "flex-end" },
              ]}
            />
          </LabelWrapper>
          <LabelWrapper label="Flex wrap:">
            <ApCheckbox
              checked={instance.props.flexWrap === "wrap"}
              setChecked={(value) =>
                setInstanceById({ ...instance, props: { ...instance.props, flexWrap: value ? "wrap" : "unset" } })
              }
              label="Wrap"
            />
          </LabelWrapper>
          <LabelWrapper label="Gap (px, vw, rem, %, ...):">
            <ApInput
              value={instance.props.gap}
              setValue={(value: any) => setInstanceById({ ...instance, props: { ...instance.props, gap: value } })}
              placehoder="Gap"
              width="80%"
            />
          </LabelWrapper>
        </>
      )}
    </>
  );
};

export default ContainerEdit;
