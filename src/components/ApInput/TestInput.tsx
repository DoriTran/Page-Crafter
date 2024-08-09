"use client";

import { useMemo, useState } from "react";
import { faCircleLeft, faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { ApCheckbox, ApDivider, ApInput } from "..";

const TestInput = () => {
  // const [type, setType] = useState<string>("text");
  const [value, setValue] = useState<any>("");
  const [options, setOptions] = useState<boolean | any[]>([]);
  const [width, setWidth] = useState<any>("");
  const [height, setHeight] = useState<any>("");

  const inputProps = useMemo<object>(() => {
    if (typeof options === "boolean") return {};
    return {
      ...(width.length !== 0 && { width: !Number.isNaN(Number(width)) ? Number(width) : width }),
      ...(height.length !== 0 && { height: !Number.isNaN(Number(height)) ? Number(height) : height }),
      ...(options.includes("Label") && { label: "Example Label:" }),
      isCorrect: options.includes("isCorrect"),
      isError: options.includes("isError"),
      ...(options.includes("Start Adornment") && {
        startAdornment: { icon: faCircleLeft, onClick: () => {} },
      }),
      ...(options.includes("End Adornment") && {
        endAdornment: { icon: faCircleRight, onClick: () => {} },
      }),
    };
  }, [height, options, width]);

  return (
    <div style={{ display: "flex", gap: 5, flexDirection: "column", backgroundColor: "aliceblue", width: 400 }}>
      <div style={{ display: "flex", gap: 15 }}>
        <ApInput label="Width:" type="text" value={width} setValue={setWidth} />
        <ApInput label="Height:" type="text" value={height} setValue={setHeight} />
      </div>
      <div style={{ display: "flex", gap: 15 }}>
        <ApCheckbox checked={options} setChecked={setOptions} label="isCorrect" />
        <ApCheckbox checked={options} setChecked={setOptions} label="isError" />
      </div>
      <div style={{ display: "flex", gap: 15 }}>
        <ApCheckbox checked={options} setChecked={setOptions} label="Start Adornment" />
        <ApCheckbox checked={options} setChecked={setOptions} label="End Adornment" />
      </div>
      <ApCheckbox checked={options} setChecked={setOptions} label="Label" />
      <ApDivider color="black" />
      <div style={{ display: "flex", gap: 15, flexDirection: "column", paddingTop: 30, backgroundColor: "pink" }}>
        <ApInput type="text" value={value} setValue={setValue} {...inputProps} />
      </div>
    </div>
  );
};

export default TestInput;
