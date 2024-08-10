import { FC, useRef } from "react";
import { ApIcon, ApInput, ApRadioGroup } from "@/components";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";
import { EditorProps } from "../../Editor";
import LabelWrapper from "../../LabelWrapper";
import { useAdminContext } from "../../../AdminContext/AdminContext";

const ImageEdit: FC<EditorProps> = ({ instance }) => {
  const { setInstanceById } = useAdminContext();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const tempUrl = URL.createObjectURL(file);
      setInstanceById({ ...instance, props: { ...instance.props, src: tempUrl } });
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <LabelWrapper>
        <Button
          variant="contained"
          color="info"
          startIcon={<ApIcon icon={faFileArrowUp} color="white" />}
          onClick={handleClick}
        >
          Upload image
        </Button>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </LabelWrapper>
      <LabelWrapper label="Alternative text:">
        <ApInput
          value={instance.props.alt || ""}
          setValue={(value: any) => setInstanceById({ ...instance, props: { ...instance.props, value } })}
          placehoder="Alternative text"
          width="100%"
        />
      </LabelWrapper>
      <LabelWrapper label="Width (px, vw, rem, %, ...):">
        <ApInput
          value={instance.props.width || "200px"}
          setValue={(value: any) => setInstanceById({ ...instance, props: { ...instance.props, width: value } })}
          placehoder="Width"
          width="80%"
        />
      </LabelWrapper>
      <LabelWrapper label="Height (px, vw, rem, %, ...):">
        <ApInput
          value={instance.props.height || "200px"}
          setValue={(value: any) => setInstanceById({ ...instance, props: { ...instance.props, height: value } })}
          placehoder="Height"
          width="80%"
        />
      </LabelWrapper>
      <LabelWrapper label="Border radius:">
        <ApInput
          value={instance.props.borderRadius}
          setValue={(value: any) =>
            setInstanceById({ ...instance, props: { ...instance.props, borderRadius: value } })
          }
          placehoder="borderRadius"
          width="80%"
        />
      </LabelWrapper>
      <LabelWrapper label="Object fit:">
        <ApRadioGroup
          value={instance.props.objectFit || "0px"}
          setValue={(value) => setInstanceById({ ...instance, props: { ...instance.props, objectFit: value } })}
          gap={0}
          options={[
            { label: "contain", value: "contain" },
            { label: "cover", value: "cover" },
            { label: "fill", value: "fill" },
            { label: "none", value: "none" },
            { label: "scale-down", value: "scale-down" },
          ]}
        />
      </LabelWrapper>
    </>
  );
};

export default ImageEdit;
