import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  ButtonGroup,
  Button
} from "shards-react";

import RangeDatePicker from "../common/RangeDatePicker";

import colors from "../../utils/colors";
import Chart from "../../utils/chart";
import BenchmarkPie2030 from "../analytics/BenchmarkPie2030";

class SCurveComp extends React.Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const chartConfig = {
      type: "line",
      options: {
        ...{
          responsive: false,
          scales: {
            yAxes: [{
              stacked: true,
            }]
          },
          animation: {
            duration: 750,
          },
        },
        ...this.props.chartOptions
      },
      data: this.props.chartData
    };

    new Chart(this.canvasRef.current, chartConfig);
  }

  render() {
    const {title} = this.props;

    return (
      <Card small className="h-100">
        {/* Card Header */}
        <CardHeader className="border-bottom">
          <h6 className="m-0">{title}</h6>
          <div className="block-handle"/>
        </CardHeader>

        <CardBody className="pt-0">
          <Row className="border-bottom py-2 bg-light">
            {/* Time Interval */}
            <Col sm="6" className="col d-flex mb-2 mb-sm-0">
              <ButtonGroup>
                <Button theme="white" active>
                  Hour
                </Button>
                <Button theme="white">Day</Button>
                <Button theme="white">Week</Button>
                <Button theme="white">Month</Button>
              </ButtonGroup>
            </Col>

            {/* DatePicker */}
            <Col sm="6" className="col">
              <RangeDatePicker className="justify-content-end"/>
            </Col>
          </Row>
          <canvas
            id="myChart"
            ref={this.canvasRef}
            width="1100px"
            height="800px">
          </canvas>
        </CardBody>
      </Card>
    );
  }
}

const maatregel1 = [0, -10, -20, -30, -40, -50, -60, -70, -80, -90, -100, -110, -120, -130, -140, -150]
const maatregel2 = [0, -8, -16, -24, -32, -40, -48, -70, -80, -90, -100, -110, -120, -130, -140, -150]
const maatregel3 = [0, -8, -16, -24, -32, -40, -48, -70, -80, -90, -100, -110, -120, -130, -140, -150]
const maatregel4 = [0, -8, -16, -24, -32, -40, -48, -70, -80, -90, -100, -110, -120, -130, -140, -150]

SCurveComp.defaultProps = {
  title: "Behaalde jaarlijkse emissiereductie (t CO2)",
  chartConfig: Object.create(null),
  chartOptions: Object.create(null),
  chartData: {
    labels: ["2020", "2022", "2024", "2026", "2028", "2030", "2032", "2034", "2036", "2038", "2040", "2042", "2044", "2046", "2048", "2050"],
    datasets: [
      {
        hoverBorderColor: colors.primary.toRGBA(1),
        label: "Maatregel 1",
        pointBackgroundColor: colors.primary.stroke,
        data: maatregel1,
        backgroundColor: [
          colors.primary.toRGBA(0.5),
        ]
      },
      {
        hoverBorderColor: colors.white.toRGBA(1),
        label: "Maatregel 2",
        data: maatregel2,
        backgroundColor: [
          colors.success.toRGBA(0.3),
        ]
      },
      {
        hoverBorderColor: colors.white.toRGBA(1),
        label: "Maatregel 3",
        data: maatregel3,
        backgroundColor: [
          colors.warning.toRGBA(0.3),
        ]
      },
      {
        hoverBorderColor: colors.white.toRGBA(1),
        label: "Maatregel 4",
        data: maatregel4,
        backgroundColor: [
          colors.danger.toRGBA(0.1),
        ]
      }
    ]
  }
};

export default SCurveComp;
