import React, {Component} from 'react';
import ReactFauxDOM from 'react-faux-dom';
import * as d3 from "d3";

class SituationChartOne extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount(){

  }

  componentDidMount() {

  }

  render(){

    //Create the element
    const div = new ReactFauxDOM.Element('div');

    let colors = {
      'pink': '#E1499A',
      'yellow': '#f0ff08',
      'green': '#B3CB74'
    };

    let color = colors.green;

    //let element = document.querySelector('.radial');

    let radius = 75;
    let border = 8;
    let padding = 0;
    let startPercent = 0;
    let hr = this.props.percent/100;
    let endPercent = hr.toFixed(2);


    let twoPi = Math.PI * 2;
    //let formatPercent = d3.format('.0%');
    let boxSize = (radius + padding) * 2;


    //let count = Math.abs((endPercent - startPercent) / 0.01);
    //let step = endPercent < startPercent ? -0.01 : 0.01;

    let arc = d3.arc()
      .startAngle(0)
      .innerRadius(radius)
      .outerRadius(radius - border)
      .cornerRadius(50);

    let parent = d3.select(div);

    let svg = parent.append('svg')
      .attr('width', boxSize)
      .attr('height', boxSize);

    let gradient = svg.append("svg:defs")
      .append("svg:linearGradient")
      .attr("id", "gradient")
      .attr("x1", "0%")
      .attr("y1", "50%")
      .attr("x2", "50%")
      .attr("y2", "0%")
      .attr("spreadMethod", "pad");

    gradient.append("svg:stop")
      .attr("offset", "0%")
      .attr("stop-color", "#B3CB74")
      .attr("stop-opacity", 1);

    gradient.append("svg:stop")
      .attr("offset", "100%")
      .attr("stop-color", "#7C9B40")
      .attr("stop-opacity", 1);

    let field = svg.append('g')
      .attr('transform', 'translate(' + boxSize / 2 + ',' + boxSize / 2 + ')');

    let meter = field.append('g')
      .attr('class', 'progress-meter');

    meter.append('path')
      .attr('class', 'background')
      .attr('fill', '#2D2E2F')
      .attr('fill-opacity', 1)
      .attr('d', arc.endAngle(twoPi));

    let front = meter.append('path')
      .attr('class', 'foreground')
      .attr('fill', '#CA2704')
      .attr('fill-opacity', 1)
      .attr('d', arc.endAngle(twoPi * endPercent));

    let numberText = meter.append('text')
      .attr('fill', '#CA2704')
      .attr('text-anchor', 'middle')
      .attr('dy', '.278em')
      .attr('class', 'radial__text')
      .style("font-size", "34px")
      .style("font-weight", "bold");

    numberText.text(endPercent*100 + "%");

    return div.toReact();
  }

}

export default SituationChartOne;
