"use client";

import { getData } from "@/actions";
import { InstanceData, MappedIds } from "@/actions/type";
import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, ReactNode, FC, useMemo, useState, useEffect } from "react";

// Create context
const ConsumerContext = createContext<{
  instances: InstanceData;
  mappedIds: MappedIds;
}>({
  instances: {},
  mappedIds: { global: {} },
});

// Custom hook to use the context
export const useConsumerContext = () => {
  return useContext(ConsumerContext);
};

// Context provider
const ConsumerProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [mappedIds, setMappedIds] = useState<MappedIds>({ global: {} });
  const [instances, setInstances] = useState<InstanceData>({});

  const { data, isSuccess } = useQuery({
    queryKey: ["consumerData"],
    queryFn: getData,
  });

  useEffect(() => {
    if (isSuccess && data) {
      setMappedIds(data.mappedIds);
      setInstances(data.instances);
    }
  }, [isSuccess, data]);

  const value = useMemo(() => {
    return { instances, mappedIds };
  }, [instances, mappedIds]);

  return <ConsumerContext.Provider value={value}>{children}</ConsumerContext.Provider>;
};

export default ConsumerProvider;
