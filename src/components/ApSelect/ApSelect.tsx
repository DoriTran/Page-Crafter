import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { FC } from "react";

interface ApSelectProps {
  value?: any[];
  setValue?: (value: any) => void;
  options?: string[];
}

const ApSelect: FC<ApSelectProps> = ({ value, setValue, options }) => {
  const handleChange = (event: SelectChangeEvent<any>) => {
    setValue?.(event.target.value);
  };

  return (
    <Select sx={{ width: 200 }} value={value} onChange={handleChange}>
      {options?.map((eachOption, index) => (
        <MenuItem key={index} value={index}>
          {eachOption}
        </MenuItem>
      ))}
    </Select>
  );
};

export default ApSelect;
