import React, { useState, useEffect } from "react";
import { Analytics } from "aws-amplify";
import ReactGA from "react-ga";
import { Row, Col, Container } from "react-bootstrap";
import DataContext from "./components/DataContext";
import DefinitionContext from "./components/DefinitionContext";
import DataProvider from "./components/DataProvider";
import {
  General,
  Overview,
  Sidebar,
  Additionally,
  Experience,
} from "./components/sections";

import dataSet from "./assets/data.json";
import "./App.scss";

ReactGA.initialize("UA-32170510-1");

function App() {
  const [dataset, setDataset] = useState<DataRecord<any>[]>([]);
  const [definitions, setDefinitions] = useState<Record<string, string>>({});

  useEffect(() => {
    const {
      data,
      meta: { definitions },
    } = dataSet;

    setDataset(data);
    setDefinitions(definitions);

    ReactGA.pageview(window.location.pathname);
    Analytics.record({name: "page.view"});
  }, []);

  return (
    <Container>
      <DataContext.Provider value={dataset}>
        <Row>
          <Col md={3} className="text-center">
            <DataProvider template="general">
              {({ header, content }: DataProps<GeneralContent>) => (
                <General header={header} content={content} />
              )}
            </DataProvider>
          </Col>
          <Col
            md={{ span: 8, offset: 1 }}
            lg={{ span: 6, offset: 3 }}
            sm={{ span: 1, offset: 2 }}
          >
            <DataProvider template="overview">
              {({ header, content }: DataProps<OverviewContent[]>) => (
                <Overview header={header} content={content} />
              )}
            </DataProvider>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={3}>
            <DataProvider template="sidebar">
              {({ header, content }: DataProps<SidebarContent>) => (
                <Sidebar header={header} content={content} />
              )}
            </DataProvider>
          </Col>
          <Col md={9}>
            <DefinitionContext.Provider value={definitions}>
              <DataProvider template="experience">
                {({ header, content }: DataProps<ExperienceContent[]>) => (
                  <Experience header={header} content={content} />
                )}
              </DataProvider>
            </DefinitionContext.Provider>
            <hr />
            <DataProvider template="additionally">
              {({ header, content }: DataProps<string[]>) => (
                <Additionally header={header} content={content} />
              )}
            </DataProvider>
          </Col>
        </Row>
      </DataContext.Provider>
    </Container>
  );
}

export default App;
