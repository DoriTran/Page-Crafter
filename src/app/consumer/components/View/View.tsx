"use client";

import { useMemo } from "react";
import { Container as ContainerType } from "@/actions/type";
import { mappingContainer } from "@/actions/utils";
import { ApScrollbar } from "@/components";
import Display from "@/app/admin/components/Preview/Display";
import { useConsumerContext } from "../ConsumerContext/ConsumerContext";

const View = () => {
  const { mappedIds, instances } = useConsumerContext();
  const globalContainer = useMemo<ContainerType>(
    () => mappingContainer(mappedIds, instances),
    [mappedIds, instances],
  );

  return (
    <ApScrollbar maxHeight="100vh" horizontal="hidden">
      <Display container={globalContainer} />
    </ApScrollbar>
  );
};

export default View;
