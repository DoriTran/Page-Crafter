"use client";

import { useMemo } from "react";
import { Container as ContainerType } from "@/actions/type";
import { mappingContainer } from "@/actions/utils";
import { ApScrollbar } from "@/components";
import { useAdminContext } from "../AdminContext/AdminContext";
import Display from "./Display";

const Preview = () => {
  const { mappedIds, instances } = useAdminContext();

  const globalContainer = useMemo<ContainerType>(
    () => mappingContainer(mappedIds, instances),
    [mappedIds, instances],
  );

  return (
    <ApScrollbar maxHeight="calc(100vh - 70px + 5px)" horizontal="hidden">
      <Display container={globalContainer} />
    </ApScrollbar>
  );
};

export default Preview;
