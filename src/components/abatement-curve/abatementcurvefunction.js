import React from 'react';

function AbatementFunction(props) {
  return (
    <div id='show_hide'>Hide inputs
      <div id='inputs'>
      </div>
      <h1>Marginal Abatement Cost Curve chart drawing</h1>
      <p>
        Paste tab separated data in as "<code>Name [TAB] Category [TAB]
        Abatement potential [TAB] Cost [NEWLINE]</code>".
        There shouldn't be a header row. Tab separated data is what you get if
        you copy and paste from Excel.
      </p>
      <textarea id='tsv'>
Thing 1	Category 1	6	-12
Thing 2	Category 2	10	10
Thing 3	Category 1	5	100
Thing 4	Category 2	-5	10
Thing 5	Category 1	-15	-25
  </textarea>
      <input type='submit' id='clear' value='clear data'/>
    </div>
  );
}


function zero_nans(n) {
  if(typeof n != 'number') { return 0; }
  if(isNaN(n)) { return 0; }
  return n;
}

// // Expects data to have a specified delta_x and delta_y and returns
// // it with a series of x, y, w and h attributes, where:
// // w is abs(delta_x), h is abs(delta_y/abs(delta_x)) x and y are the top left
// // corners of a rectangle, so that the rectangles are sorted
// // in order of increasing h, and so that w and h never have
// // to be negative (because svg doesn't allow rectangles with
// // negative widths or heights).
// d3.layout.macc = function() {
//   var values = function(d) { return d; }, // d3_identity,
//     label_minimum_gap = 10,
//     delta_x_minimum_for_label = 0,
//     out = d3_layout_macc_out,
//     delta_x = d3_layout_macc_delta_x,
//     delta_y = d3_layout_macc_delta_y,
//     x_domain = [0,0],
//     always_include_label = d3_layout_macc_always_include_label,
//     h = d3_layout_macc_h; // In case want to do something else than h = abs(delta_y/delta_x)
//
//   function macc(data) {
//
//     // Convert series to canonical two-dimensional representation
//     var series = data.map(function(d,i) {
//       return values.call(macc, d, i);
//     });
//
//     // Convert each series to canonical [[d,delta_x,delta_y,h]] representation
//     // where h = y/x and d is the original datum
//     var points = series.map(function(d,i) {
//       var new_delta_x = zero_nans(delta_x.call(macc, d, i)),
//         new_delta_y = zero_nans(delta_y.call(macc, d, i)),
//         new_h = zero_nans(h.call(macc, d, i, new_delta_x, new_delta_y));
//       return [d, new_delta_x, new_delta_y, new_h];
//     });
//
//     // Now need to sort the data. We want items with the most
//     // negative h to be closest to x = 0. Because the delta_x values
//     // might be negative, that means sliceting into positive
//     // and negative groups
//     var negative_delta_x = [],
//       positive_delta_x = [],
//       n = points.length,
//       i,
//       p;
//
//     for(i=0; i < n; ++i) {
//       p = points[i]
//       if(p[1] < 0) { // delta_x is negative
//         negative_delta_x.push(p);
//       } else {
//         positive_delta_x.push(p);
//       }
//     }
//
//     // Now we sort the negative and positive groups
//     negative_delta_x.sort(function(a,b) { return a[3] - b[3]; }); // Sorting by h
//     positive_delta_x.sort(function(a,b) { return a[3] - b[3]; }); // Sorting by h
//
//     // Now we work out the x values, turning the points into the form [[d, delta_x, delta_y, h, x]]
//     var x = 0;
//     negative_delta_x = negative_delta_x.map(function(d,i) {
//       x = x + d[1]; // Do the addition first, so x is top left of rect
//       d.push(x);
//       return d;
//     });
//
//     x_domain[0] = x;
//
//     x = 0;
//     positive_delta_x = positive_delta_x.map(function(d,i) {
//       d.push(x);
//       x = x + d[1]; // Do the addition second, so x is the top left of the rec
//       return d;
//     });
//
//     x_domain[1] = x;
//
//     // Now we slice the groups again, according to whether they have negative or positive h
//     var negative_delta_x_negative_h,
//       negative_delta_x_positive_h,
//       positive_delta_x_negative_h,
//       positive_delta_x_positive_h;
//
//     n = negative_delta_x.length;
//     for(i=0; i<n; ++i) {
//       if(negative_delta_x[i][3]>0) { break; }
//     };
//     negative_delta_x_negative_h = negative_delta_x.slice(0,i);
//     negative_delta_x_positive_h = negative_delta_x.slice(i,n);
//
//     n = positive_delta_x.length;
//     for(i=0; i<n; ++i) {
//       if(positive_delta_x[i][3]>0) { break; }
//     };
//     positive_delta_x_negative_h = positive_delta_x.slice(0,i);
//     positive_delta_x_positive_h = positive_delta_x.slice(i,n);
//
//     var minimum_space_between_label_and_block = label_minimum_gap/5;
//
//     // now negative_delta_x_positive_h, top left is at h
//     // working backwards to align labels
//     var label_y = 0;
//     n = negative_delta_x_positive_h.length;
//     for(i=0; i<n; ++i) {
//       p = negative_delta_x_positive_h[i];
//       if(always_include_label(p[0]) || (-p[1]>delta_x_minimum_for_label)) {
//         if((p[3]-label_y)<label_minimum_gap) {
//           label_y = label_y + label_minimum_gap;
//         } else {
//           label_y = p[3] + minimum_space_between_label_and_block;
//         }
//       }
//       out.call(macc, p[0], p[4], p[3], -p[1], p[3], label_y, true); // d, x, y, w, h, label_y
//     };
//
//     // Now negative_delta_x_negative_h, top left is on the axis
//     label_y = 0;
//     n = negative_delta_x_negative_h.length;
//     for(i=n-1; i>=0; --i) {
//       p = negative_delta_x_negative_h[i];
//       if(always_include_label(p[0]) || (-p[1]>delta_x_minimum_for_label)) {
//         if(-(p[3]-label_y)<label_minimum_gap) {
//           label_y = label_y - label_minimum_gap;
//         } else {
//           label_y = p[3] - minimum_space_between_label_and_block;
//         }
//       }
//       out.call(macc, p[0], p[4], 0, -p[1], -p[3], label_y - label_minimum_gap, false); // d, x, y, w, h, label_y
//     };
//
//     // Now postive_delta_x_postive_h
//     // making sure the y is top left (in this case h above the axis)
//     label_y = 0;
//     n = positive_delta_x_positive_h.length;
//     for(i=0; i<n; ++i) {
//       p = positive_delta_x_positive_h[i];
//       if(always_include_label(p[0]) || (p[1]>delta_x_minimum_for_label)) {
//         if((p[3]-label_y)<label_minimum_gap) {
//           label_y = label_y + label_minimum_gap;
//         } else {
//           label_y = p[3] + minimum_space_between_label_and_block;
//         }
//       }
//       out.call(macc, p[0], p[4], p[3], p[1], p[3], label_y, false); // d, x, y, w, h, label_y, label_to_right
//     };
//
//     // Now positive_delta_x_negative_h, top left is on the axis
//     // working backwards to align labels
//     label_y = 0;
//     n = positive_delta_x_negative_h.length;
//     for(i=n-1; i>=0; --i) {
//       p = positive_delta_x_negative_h[i];
//       if(always_include_label(p[0]) || (p[1]>delta_x_minimum_for_label)) {
//         if(-(p[3]-label_y)<label_minimum_gap) {
//           label_y = label_y - label_minimum_gap;
//         } else {
//           label_y = p[3] - minimum_space_between_label_and_block;
//         }
//       }
//       out.call(macc, p[0], p[4], 0, p[1], -p[3], label_y - label_minimum_gap, true); // d, x, y, w, h, label_y
//     };
//
//
//     return data;
//   }
//
//   macc.values = function(z) {
//     if (!arguments.length) return values;
//     values = z;
//     return macc;
//   };
//
//   macc.delta_x = function(z) {
//     if (!arguments.length) return delta_x;
//     delta_x = z;
//     return macc;
//   };
//
//   macc.delta_y = function(z) {
//     if (!arguments.length) return delta_y;
//     delta_y = z;
//     return macc;
//   };
//
//   macc.h = function(z) {
//     if (!arguments.length) return y;
//     h = z;
//     return macc;
//   };
//
//   macc.out = function(z) {
//     if (!arguments.length) return out;
//     out = z;
//     return macc;
//   };
//
//   macc.x_domain = function() {
//     return x_domain;
//   }
//
//   // The minimum vertical space for the labels
//   macc.label_minimum_gap = function(z) {
//     if (!arguments.length) return label_minimum_gap;
//     label_minimum_gap = z;
//     return macc;
//   };
//
//   // If delta_x is less than this minimum, then no
//   // space is left for the label, except if the function below returns true
//   macc.delta_x_minimum_for_label = function(z) {
//     if (!arguments.length) return delta_x_minimum_for_label;
//     delta_x_minimum_for_label = z;
//     return macc;
//   };
//
//   macc.always_include_label = function(z) {
//     if (!arguments.length) return always_include_label;
//     always_include_label = z;
//     return macc;
//   };
//
//   return macc;
// }
//
// function d3_layout_macc_delta_x(d) {
//   return d.delta_x;
// }
//
// function d3_layout_macc_delta_y(d) {
//   return d.delta_y;
// }
//
// function d3_layout_macc_out(d, x, y, w, h, label_y, label_to_right) {
//   d.x = x;
//   d.y = y;
//   d.w = w;
//   d.h = h;
//   d.label_y = label_y;
//   d.label_y_anchor = y > 0 ? y : y-h;
//   d.label_x = x+(w/2);
//   d.label_to_right = label_to_right; // If true, label_x is to left of label, if false, label_x is to right of label
// }
//
// function d3_layout_macc_h(d, i, delta_x, delta_y) {
//   if(delta_x == 0 ) { return 0; }
//   return delta_y/Math.abs(delta_x);
// }
//
// function d3_layout_macc_always_include_label(d) {
//   return false;
// }
//
// var data = [];
//
// var x_axis_name = "";
// var y_axis_name = "";
// var incremental_cost_name = "";
// var minimum_pixels_for_label = 20;
// var user_min_y = "";
// var user_max_y = "";
//
// var format = d3.format(".0f");
//
// var margin = {top: 300, right: 100, bottom: 300, left: 100},
//   width = window.innerWidth - margin.left - margin.right,
//   height = window.innerHeight - margin.top - margin.bottom;
//
// var x = d3.scale.linear()
//   .domain([0,300])
//   .range([0, width]);
//
// var y = d3.scale.linear()
//   .domain([-500,500])
//   .range([height, 0]);
//
// var xAxis = d3.svg.axis()
//   .scale(x)
//   .orient("bottom");
//
// var yAxis = d3.svg.axis()
//   .scale(y)
//   .orient("left");
//
// var delta_x_minimum_for_label = x.invert(minimum_pixels_for_label)-x.invert(0);
//
// var highlighted_rect = undefined;
//
// var maccLayout = d3.layout.macc()
//   .delta_x(function(d) { return d.abatement })
//   .delta_y(function(d) { return d.incremental_cost; })
//   .delta_x_minimum_for_label(delta_x_minimum_for_label)
//   .always_include_label(function(d) { return d == highlighted_rect; });
//
// function show_label(d) {
//   return (d == highlighted_rect) || (d.w > delta_x_minimum_for_label)
// }
//
// function label_y_position(d) {
//   var desired_y = y(d.label_y)+(d.label_y < 0 ? 5 : -5);
//   return desired_y;
// }
//
// function draw_macc() {
//
//   x.range([0,width]);
//   y.range([height, 0]);
//
//   delta_x_minimum_for_label = x.invert(minimum_pixels_for_label)-x.invert(0);
//
//   data = maccLayout(data);
//
//   // Get the x range in the data
//   var data_x_domain = maccLayout.x_domain();
//   // And the y range in the data
//   var data_y_domain = d3.extent(data.map(function(d) { return (d.incremental_cost/d.abatement); }));
//
//   // Allow the user to override
//   if(user_min_y != "") { data_y_domain[0] = +user_min_y; }
//   if(user_max_y != "") { data_y_domain[1] = +user_max_y; }
//
//   // Now change the axis to something nice that encompasses that range
//   x.domain(data_x_domain).nice();
//   y.domain(data_y_domain).nice();
//   // Now rework out how much space we have for drawing labels
//   delta_x_minimum_for_label = x.invert(minimum_pixels_for_label)-x.invert(0);
//   maccLayout.delta_x_minimum_for_label(delta_x_minimum_for_label);
//   maccLayout.label_minimum_gap(y.invert(0)-y.invert(20));
//   // And sadly, we now need to rework the maccLayout
//   data = maccLayout(data);
//
//   var svg = d3.select("#chart").selectAll('svg').data([data]);
//
//   var gEnter = svg.enter().append("svg").append("g")
//
//   svg
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//
//   gEnter
//     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
//
//   svg = svg.select('g');
//
//   svg
//     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
//
//   // Arrange some groups in the right order
//   gEnter.append("g").attr("id", "boxlayer");
//   gEnter.append("g").attr("id", "axislayer");
//   gEnter.append("g").attr("id", "legendlayer");
//   gEnter.append("g").attr("id", "shadowlayer");
//   gEnter.append("g").attr("id", "labellayer");
//   gEnter.append("g").attr("id", "linelayer");
//
//   // Lay out the boxes
//   var rects = svg.select("g#boxlayer").selectAll("rect.box")
//     .data(data, function(d) { return d.id; });
//
//   rects.exit().remove();
//
//   rects.enter().append("rect")
//     .attr("class", "box")
//     .attr("data-name", function(d) { return d.name; })
//     .on('mouseover', function(d) { highlighted_rect = d; draw_macc(); })
//     .on('mouseout', function(d) { highlighted_rect = undefined; draw_macc(); });
//
//   rects
//     .classed("hover", function(d) { return d == highlighted_rect; })
//     .attr("style", function(d) { return "fill:"+category_colours(d.category); })
//     .transition()
//     .attr("x", function(d) { return x(d.x); })
//     .attr("width", function(d) { return x(d.w)-x(0) })
//     .attr("y", function(d) { return y(d.y); })
//     .attr("height", function(d) { return  y(0)-y(d.h); });
//
//   // Axes next, so they are in front of rects but behind labels
//   var axisLayer = gEnter.select("g#axislayer");
//
//   axisLayer.append("g").attr("class", "y axis")
//     .attr("transform", "translate(" + x(0) + ",0)")
//     .call(yAxis);
//
//   axisLayer.append("g").attr("class", "x axis")
//     .attr("transform", "translate(0, " + y(0) + ")")
//     .call(xAxis);
//
//   svg.select(".y.axis").transition()
//     .attr("transform", "translate(" + x(0) + ",0)")
//     .call(yAxis);
//
//   svg.select(".x.axis").transition()
//     .attr("transform", "translate(0, " + y(0) + ")")
//     .call(xAxis);
//
//   axisLayer.append("text")
//     .classed("ylabel", true)
//     .text(y_axis_name)
//     .attr("y", y.range()[1]-12);
//
//   svg.select('.ylabel').transition()
//     .text(y_axis_name)
//     .attr("y", y.range()[1]-12)
//     .attr("x", x(0)-47);
//
//   axisLayer.append("text")
//     .classed("xlabel", true)
//     .attr("text-anchor", "end")
//     .attr("x", x.range()[1]-41)
//     .attr("y", y(0)+42);
//
//   svg.select('.xlabel').transition()
//     .text(x_axis_name)
//     .attr("x", x.range()[1])
//     .attr("y", y(0)+42);
//
//   // Now we lay out some shadow labels (so that the labels stand out)
//
//   var shadows = svg.select("g#shadowlayer").selectAll("text.shadow")
//     .data(function(data) { return data.filter(show_label); }, function(d) { return d.id; });
//
//   shadows.exit().remove();
//
//   shadows.enter().append('text')
//     .classed('shadow', true);
//
//   shadows
//     .order()
//     .classed("rightlabel", function(d) { return d.label_to_right })
//     .text(function(d) { return d.name; })
//     .transition()
//     .attr("x", function(d) { return x(d.label_x); })
//     .attr("y", label_y_position);
//
//   // Now we lay out the actual labels
//
//   var labels = svg.select("g#labellayer").selectAll("text.label")
//     .data(function(data) { return data.filter(show_label); }, function(d) { return d.id; });
//
//   labels.exit().remove();
//
//   labels.enter().append('text')
//     .classed('label', true)
//     .on('mouseover', function(d) { highlighted_rect = d; draw_macc(); })
//     .on('mouseout', function(d) { highlighted_rect = undefined; draw_macc(); })
//     // .on('click', function(d) { set(d.code); })
//     .attr("x", function(d) { return x(d.label_x); })
//     .attr("y", label_y_position);
//
//   labels
//     .order()
//     .classed("hover", function(d) { return d == highlighted_rect; })
//     .classed("rightlabel", function(d) { return d.label_to_right })
//     .text(function(d) { return d.name; })
//     .transition()
//     .attr("x", function(d) { return x(d.label_x); })
//     .attr("y", label_y_position);
//
//   // Now we lay ou the lines connecting the rect to the label
//   var lines = svg.select("g#linelayer").selectAll("line.label")
//     .data(function(data) { return data.filter(show_label); }, function(d) { return d.id; });
//
//   lines.exit().remove();
//
//   lines.enter().append('line')
//     .classed('label', true)
//     .attr("x1", function(d) { return x(d.label_x); })
//     .attr("x2", function(d) { return x(d.label_x); })
//     .attr("y1", function(d) { return y(d.label_y_anchor)+(d.label_y_anchor < 0 ? 2 : -2); })
//     .attr("y2", function(d) { return y(d.label_y)+(d.label_y < 0 ? -10 : 0 ); });
//
//   lines
//     .classed("hover", function(d) { return d == highlighted_rect; })
//     .transition()
//     .attr("x1", function(d) { return x(d.label_x); })
//     .attr("x2", function(d) { return x(d.label_x); })
//     .attr("y1", function(d) { return y(d.label_y_anchor)+(d.label_y_anchor < 0 ? 2 : -2); })
//     .attr("y2", function(d) { return y(d.label_y)+(d.label_y < 0 ? -10 : 0 ); });
//
//   // Now add info box
//   if(highlighted_rect != undefined ) {
//     var emissions_direction = highlighted_rect.abatement > 0 ? "reduces" : "increases";
//     var costs_direction = highlighted_rect.incremental_cost > 0 ? "increases" : "reduces";
//     d3.select("#infobox").html(
//       ""+highlighted_rect.name+" "+
//       emissions_direction+" emissions by "+format(Math.abs(highlighted_rect.abatement))+"&thinsp;"+x_axis_name+" and "+
//       costs_direction+" costs by "+format(Math.abs(highlighted_rect.incremental_cost))+"&thinsp;"+incremental_cost_name+" (equivalent to "+
//       format(highlighted_rect.incremental_cost/Math.abs(highlighted_rect.abatement))+"&thinsp;"+y_axis_name+")"
//     )
//       .classed("show", true);
//   } else {
//     d3.select("#infobox").text("").classed("show",false);
//   }
//
//   // Now the legend
//   var legends = svg.select("g#legendlayer").selectAll("g.legend")
//     .data(categories.values());
//
//   legends.exit().remove();
//
//   var new_legends = legends.enter().append("g").classed("legend",true);
//
//   new_legends.append("rect")
//     .attr("width",20)
//     .attr("height",20);
//
//   new_legends.append("text")
//     .attr("text-anchor", "end");
//
//   legends.select("rect")
//     .attr("fill", function(d) { return category_colours(d); })
//     .attr("x",  x.range()[1]-20)
//     .attr("y", function(d,i) { return y.range()[0]+(margin.bottom-25)-(25*i) });
//
//   legends.select("text")
//     .text(Object)
//     .attr("x", x.range()[1]-25)
//     .attr("y", function(d,i) { return y.range()[0]+(margin.bottom-25)-(25*i)+14 });
//
//
// };
//
// var category_colours = undefined;
// var id_count = 0;
// var categories = d3.set();
//
// function reformat_tsv(d) {
//   if(d.length < 4) return;
//   id_count = id_count + 1;
//   var label, category, abatement, incremental_cost;
//   label = d[0].trim();
//   category = d[1].trim();
//   abatement =  +(d[2].replace(/[,()]/g,''));
//   incremental_cost =  +(d[3].replace(/[,()]/g,''));
//   categories.add(category);
//   return {
//     id: id_count,
//     name: label,
//     category: category,
//     incremental_cost: incremental_cost,
//     abatement: abatement,
//   }
// }
//
// var data = undefined;
//
// var go = function() {
//   var tsv = d3.select('#tsv').node().value;
//   x_axis_name = d3.select('#x_axis_name').node().value;
//   y_axis_name = d3.select('#y_axis_name').node().value;
//   margin.top = +d3.select('#margin_top').node().value;
//   margin.bottom = +d3.select('#margin_bottom').node().value;
//
//   // user_width = d3.select('#chart_width').node().value;
//   // user_height = d3.select('#chart_height').node().value;
//
//   user_min_y = d3.select('#y_min').node().value;
//   user_max_y = d3.select('#y_max').node().value;
//
//   if(user_width == "") {
//     width = window.innerWidth - margin.left - margin.right;
//     if(width < 400) width = 400;
//   } else {
//     width = +user_width;
//   }
//
//   if(user_height == "") {
//     height = window.innerHeight - margin.top - margin.bottom;
//     if(height < 400) height = 400;
//   } else {
//     height = +user_height;
//   }
//
//   minimum_pixels_for_label = d3.select('#minimum_pixels_for_label').node().value;
//   incremental_cost_name = d3.select('#incremental_cost_name').node().value;
//   id_count = 0;
//   categories = d3.set();
//
//   data = d3.tsv.parseRows(tsv, reformat_tsv);
//
//   if(categories.size() > 10) {
//     category_colours = d3.scale.category20();
//   } else {
//     category_colours = d3.scale.category10();
//   }
//
//   draw_macc();
// };
//
// d3.select("#go").on("click", function(){ go(); d3.event.preventDefault();} );
// d3.select("#clear").on("click", function(){ d3.select('#tsv').node().value = ""; d3.event.preventDefault(); } );
//
// var inputs_hidden = false;
// d3.select("#show_hide").on("click", function() {
//   if(inputs_hidden) {
//     d3.select("#inputs").classed("hidden", false);
//     d3.select("#show_hide").text("Hide inputs");
//     inputs_hidden = false;
//   } else {
//     d3.select("#inputs").classed("hidden", true);
//     d3.select("#show_hide").text("Show inputs");
//     inputs_hidden = true;
//   }
// });
//
// go();

export default AbatementFunction;

