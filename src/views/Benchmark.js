import React from "react";
import { Container, Row, Col } from "shards-react";

import BenchmarkActivity from "../components/benchmark/BenchmarkActivity";
import BenchmarkContact from "../components/benchmark/BenchmarkContact";
import BenchmarkDetails from "../components/benchmark/BenchmarkDetails";
import BenchmarkPerformance from "../components/benchmark/BenchmarkPerformance";
import BenchmarkStats from "../components/benchmark/BenchmarkStats";
import BenchmarkTeams from "../components/benchmark/BenchmarkTeams";
import UsersByDevice from "../components/analytics/UsersByDevice";
import BenchmarkPie2030 from "../components/analytics/BenchmarkPie2030";

const Benchmark = () => (
  <Container fluid className="main-content-container px-4">
    <Row className="mt-4">
      {/*<Col lg="4" sm="12">*/}
      {/*  <BenchmarkDetails />*/}
      {/*  <BenchmarkContact />*/}
      {/*  <BenchmarkTeams />*/}
      {/*</Col>*/}
      <Col lg="12">
        <BenchmarkStats />
        <Row>
        <Col lg="4">
          <BenchmarkPie2030 />
        </Col>
        <Col lg="4">
          <BenchmarkPie2030 />
        </Col>
        <Col lg="4">
          <BenchmarkPie2030 />
        </Col>
        </Row>
        <BenchmarkPerformance />
        <BenchmarkActivity />
      </Col>
    </Row>
  </Container>
);

export default Benchmark;
