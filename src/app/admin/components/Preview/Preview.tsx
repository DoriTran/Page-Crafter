"use client";

import { useEffect, useMemo } from "react";
import { Container as ContainerType } from "@/actions/type";
import { mappingContainer } from "@/actions/utils";
import { useAdminContext } from "../AdminContext/AdminContext";
import Display from "./Display";

const Preview = () => {
  const { mappedIds, instances } = useAdminContext();
  useEffect(() => {
    console.log(mappedIds, instances);
  }, [mappedIds, instances]);

  const globalContainer = useMemo<ContainerType>(
    () => mappingContainer(mappedIds, instances),
    [mappedIds, instances],
  );

  return <Display container={globalContainer} />;
};

export default Preview;
