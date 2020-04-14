import { useContext, ReactNode } from "react";
import DataContext from "./DataContext";

interface FunctionComponent<P = {}> {
  (props: P & { children?: (props: any) => ReactNode }): any;
}

interface Props {
  template: string;
}

const DataProvider: FunctionComponent<Props> = ({ template, children }) => {
  const dataContext = useContext(DataContext);
  const props = dataContext.find((item) => item.template === template);

  if (!props) return null;

  return children && children(props);
};

export default DataProvider;
