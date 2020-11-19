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

class Abatement extends React.Component {
  constructor(props) {
    super(props);

    this.legendRef = React.createRef();
    this.canvasRef = React.createRef();
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
          <div id='show_hide'>Hide inputs</div>
          <div id='inputs'>
            <h1>Marginal Abatement Cost Curve chart drawing</h1>
            <textarea id='tsv'>
              Thing 1	Category 1	6	-12
              Thing 2	Category 2	10	10
              Thing 3	Category 1	5	100
              Thing 4	Category 2	-5	10
              Thing 5	Category 1	-15	-25
            </textarea>
            <input type='submit' id='clear' value='clear data'/>
            <p>x axis name<input value='MtCO2e in 2025' id='x_axis_name' /></p>
            <p>y axis name<input value='£2011/tCO2e' id='y_axis_name' /></p>
            <p>incremental cost name<input value='£M' id='incremental_cost_name' /></p>
            <p>Minimum width for label to be displayed <input value='20' id='minimum_pixels_for_label' /> in pixels (zero means label every box)</p>
            <p>Minimum y to display <input value='' id='y_min' /> (leave blank for automatic scaling)</p>
            <p>Maximum y to display <input value='' id='y_max' /> (leave blank for automatic scaling)</p>
            <p>Width <input value='' id='chart_width' /> in pixels (leave blank for automatic scaling)</p>
            <p>Height <input value='' id='chart_height' /> in pixels (leave blank for automatic scaling)</p>
            <p>Margin top <input value='50' id='margin_top' /> in pixels (increase if the labels go off of the top)</p>
            <p>Margin bottom <input value='50' id='margin_bottom' /> in pixels (increase if the labels go off of the bottom)</p>
            <input type='submit' id='go' value='Redraw chart'/>
          </div>
          <div id='chart'> </div>
          <div id='infobox'></div>
          <div ref={this.legendRef}/>
        </CardBody>
      </Card>
    );
  }
}

export default Abatement;
