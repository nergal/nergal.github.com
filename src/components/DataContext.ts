import React from "react";

const DataContext = React.createContext<DataRecord<any>[]>([]);

export default DataContext;
