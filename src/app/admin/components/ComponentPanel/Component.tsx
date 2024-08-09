import { ApIcon } from "@/components";
import { Paper } from "@mui/material";
import { FC } from "react";
import styles from "./ComponentPanel.module.scss";

interface ComponentProps {
  type: string;
  icon: any;
}

const Component: FC<ComponentProps> = ({ type, icon }) => {
  return (
    <Paper className={styles.wrapper} elevation={3}>
      <ApIcon icon={icon} />
      <div className={styles.type}>{type}</div>
    </Paper>
  );
};

export default Component;
