"use client";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useMemo, useState } from "react";
import ApChip from "./ApChip";
import { chipColors } from "./ChipStyle";
import { ApInput, ApTest } from "..";

const TestChip = () => {
  const [options, setOptions] = useState<string[]>([]);
  const [label, setLabel] = useState<string>("Testing label");
  const [width, setWidth] = useState<string>("fit-content");
  const [totalEndIcons, setTotalEndIcons] = useState<number>(1);
  const [totalHoverIcons, setTotalHoverIcons] = useState<number>(1);

  const chipProps = useMemo<object>(() => {
    const availableColors = Object.keys(chipColors);
    const onClick = options.includes("Clickable") ? () => {} : undefined;
    return {
      width,
      ...(options.includes("Small") && { small: true }),
      ...(options.includes("Filled") && { filled: true }),
      ...(!options.includes("All colors") && {
        color: options.filter((eachOption: string) => availableColors.includes(eachOption))[0],
      }),
      ...(options.includes("Start icon") && { icon: { icon: faStar } }),
      ...(options.includes("End icon") && { endIcons: { icons: Array(totalEndIcons).fill(faStar), onClick } }),
      ...(options.includes("Hover icon") && {
        hoverIcons: { icons: Array(totalHoverIcons).fill(faStar), onClick },
      }),
    };
  }, [width, options, totalEndIcons, totalHoverIcons]);

  return (
    <ApTest
      optionsLists={[
        { title: "Style", checks: ["Small", "Filled"] },
        { title: "Color", radios: Object.keys(chipColors), checks: ["All colors"] },
        { title: "Icon", checks: ["Start icon", "End icon", "Hover icon"] },
        { title: "Clickable", checks: ["Clickable"] },
      ]}
      setOptions={setOptions}
      config={
        <div style={{ display: "flex", gap: 15 }}>
          <ApInput value={label} setValue={setLabel} label="Label" width="150px" />
          <ApInput value={width} setValue={setWidth} label="Width" width="150px" />
          <ApInput
            type="number"
            value={totalEndIcons}
            setValue={setTotalEndIcons}
            label="End icons"
            width="120px"
          />
          <ApInput
            type="number"
            value={totalHoverIcons}
            setValue={setTotalHoverIcons}
            label="Hover icons"
            width="120px"
          />
        </div>
      }
    >
      {!options.includes("All colors") && <ApChip label={label} {...chipProps} />}
      {options.includes("All colors") &&
        Object.entries(chipColors).map(([key]) => <ApChip label={key} key={key} color={key} {...chipProps} />)}
    </ApTest>
  );
};

export default TestChip;
