import type { PureChartKnowledgeBase } from './types';

export const base: PureChartKnowledgeBase = {
  line_chart: {
    id: 'line_chart',
    name: 'Line Chart',
    alias: ['Lines'],
    family: ['LineCharts'],
    def: 'A line chart uses lines with segments to show changes in data in a ordinal dimension.',
    purpose: ['Comparison', 'Trend', 'Anomaly'],
    coord: ['Cartesian2D'],
    category: ['Statistic'],
    shape: ['Lines'],
    dataPres: [
      { minQty: 1, maxQty: 1, fieldConditions: ['Time', 'Ordinal'] },
      { minQty: 0, maxQty: 1, fieldConditions: ['Nominal'] },
      { minQty: 1, maxQty: 1, fieldConditions: ['Interval'] },
    ],
    channel: ['Position', 'Direction'],
    recRate: 'Recommended',
  },

  step_line_chart: {
    id: 'step_line_chart',
    name: 'Step Line Chart',
    alias: ['Step Lines'],
    family: ['LineCharts'],
    def: 'A step line chart is a line chart in which points of each line are connected by horizontal and vertical line segments, looking like steps of a staircase.',
    purpose: ['Comparison', 'Trend'],
    coord: ['Cartesian2D'],
    category: ['Statistic'],
    shape: ['Lines'],
    dataPres: [
      { minQty: 1, maxQty: 1, fieldConditions: ['Time', 'Ordinal'] },
      { minQty: 0, maxQty: 1, fieldConditions: ['Nominal'] },
      { minQty: 1, maxQty: 1, fieldConditions: ['Interval'] },
    ],
    channel: ['Position', 'Direction'],
    recRate: 'Recommended',
  },

  area_chart: {
    id: 'area_chart',
    name: 'Area Chart',
    alias: [],
    family: ['AreaCharts'],
    def: 'An area chart uses series of line segments with overlapped areas to show the change in data in a ordinal dimension.',
    purpose: ['Comparison', 'Trend', 'Anomaly'],
    coord: ['Cartesian2D'],
    category: ['Statistic'],
    shape: ['Area'],
    dataPres: [
      { minQty: 1, maxQty: 1, fieldConditions: ['Time', 'Ordinal'] },
      { minQty: 1, maxQty: 1, fieldConditions: ['Interval'] },
      { minQty: 0, maxQty: 1, fieldConditions: ['Nominal'] },
    ],
    channel: ['Color', 'Position'],
    recRate: 'Recommended',
  },

  stacked_area_chart: {
    id: 'stacked_area_chart',
    name: 'Stacked Area Chart',
    alias: [],
    family: ['AreaCharts'],
    def: 'A stacked area chart uses layered line segments with different styles of padding regions to display how multiple sets of data change in the same ordinal dimension, and the endpoint heights of the segments on the same dimension tick are accumulated by value.',
    purpose: ['Composition', 'Trend'],
    coord: ['Cartesian2D'],
    category: ['Statistic'],
    shape: ['Area'],
    dataPres: [
      { minQty: 1, maxQty: 1, fieldConditions: ['Time', 'Ordinal'] },
      { minQty: 1, maxQty: 1, fieldConditions: ['Interval'] },
      { minQty: 1, maxQty: 1, fieldConditions: ['Nominal'] },
    ],
    channel: ['Color', 'Length'],
    recRate: 'Recommended',
  },

  percent_stacked_area_chart: {
    id: 'percent_stacked_area_chart',
    name: 'Percent Stacked Area Chart',
    alias: ['Percent Stacked Area', '% Stacked Area', '100% Stacked Area'],
    family: ['AreaCharts'],
    def: 'A percent stacked area chart is an extented stacked area chart in which the height of the endpoints of the line segment on the same dimension tick is the accumulated proportion of the ratio, which is 100% of the total.',
    purpose: ['Comparison', 'Composition', 'Proportion', 'Trend'],
    coord: ['Cartesian2D'],
    category: ['Statistic'],
    shape: ['Area'],
    dataPres: [
      { minQty: 1, maxQty: 1, fieldConditions: ['Time', 'Ordinal'] },
      { minQty: 1, maxQty: 1, fieldConditions: ['Interval'] },
      { minQty: 1, maxQty: 1, fieldConditions: ['Nominal'] },
    ],
    channel: ['Color', 'Length'],
    recRate: 'Recommended',
  },

  /**
   * WIP: unavailable until completed
   */
  // interval_area_chart: {
  //   id: 'interval_area_chart',
  //   name: 'Interval Area Chart',
  //   alias: [],
  //   family: [],
  //   def: '',
  //   purpose: [],
  //   coord: [],
  //   category: [],
  //   shape: [],
  //   dataPres: [],
  //   channel: [],
  //   recRate: 'Recommended',
  // },

  /**
   * WIP: unavailable until completed
   */
  // stream_chart: {
  //   id: 'stream_chart',
  //   name: 'Stream Chart',
  //   alias: [],
  //   family: [],
  //   def: '',
  //   purpose: [],
  //   coord: [],
  //   category: [],
  //   shape: [],
  //   dataPres: [],
  //   channel: [],
  //   recRate: 'Recommended',
  // },

  column_chart: {
    id: 'column_chart',
    name: 'Column Chart',
    alias: ['Columns'],
    family: ['ColumnCharts'],
    def: 'A column chart uses series of columns to display the value of the dimension. The horizontal axis shows the classification dimension and the vertical axis shows the corresponding value.',
    purpose: ['Comparison', 'Distribution', 'Rank'],
    coord: ['Cartesian2D'],
    category: ['Statistic'],
    shape: ['Bars'],
    dataPres: [
      { minQty: 1, maxQty: 2, fieldConditions: ['Nominal', 'Ordinal'] },
      { minQty: 1, maxQty: 1, fieldConditions: ['Interval'] },
    ],
    channel: ['Position', 'Color'],
    recRate: 'Recommended',
  },

  grouped_column_chart: {
    id: 'grouped_column_chart',
    name: 'Grouped Column Chart',
    alias: ['Grouped Column'],
    family: ['ColumnCharts'],
    def: 'A grouped column chart uses columns of different colors to form a group to display the values of dimensions. The horizontal axis indicates the grouping of categories, the color indicates the categories, and the vertical axis shows the corresponding value.',
    purpose: ['Comparison', 'Distribution', 'Rank'],
    coord: ['Cartesian2D'],
    category: ['Statistic'],
    shape: ['Bars'],
    dataPres: [
      { minQty: 2, maxQty: 2, fieldConditions: ['Nominal', 'Ordinal'] },
      { minQty: 1, maxQty: 1, fieldConditions: ['Interval'] },
    ],
    channel: ['Color', 'Position'],
    recRate: 'Recommended',
  },

  stacked_column_chart: {
    id: 'stacked_column_chart',
    name: 'Stacked Column Chart',
    alias: ['Stacked Column'],
    family: ['ColumnCharts'],
    def: 'A stacked column chart uses stacked bars of different colors to display the values for each dimension. The horizontal axis indicates the first classification dimension, the color indicates the second classification dimension, and the vertical axis shows the corresponding value.',
    purpose: ['Comparison', 'Composition', 'Distribution', 'Rank'],
    coord: ['Cartesian2D'],
    category: ['Statistic'],
    shape: ['Bars'],
    dataPres: [
      { minQty: 2, maxQty: 2, fieldConditions: ['Nominal', 'Ordinal'] },
      { minQty: 1, maxQty: 1, fieldConditions: ['Interval'] },
    ],
    channel: ['Color', 'Length', 'Position'],
    recRate: 'Recommended',
  },

  percent_stacked_column_chart: {
    id: 'percent_stacked_column_chart',
    name: 'Percent Stacked Column Chart',
    alias: ['Percent Stacked Column', '% Stacked Column', '100% Stacked Column'],
    family: ['ColumnCharts'],
    def: 'A percent stacked column chart uses stacked bars of different colors to display the values for each dimension. The horizontal axis indicates the first classification dimension, the color indicates the second classification dimension, and the vertical axis shows the percentage of the corresponding classification.',
    purpose: ['Comparison', 'Composition', 'Distribution', 'Proportion'],
    coord: ['Cartesian2D'],
    category: ['Statistic'],
    shape: ['Bars'],
    dataPres: [
      { minQty: 2, maxQty: 2, fieldConditions: ['Nominal', 'Ordinal'] },
      { minQty: 1, maxQty: 1, fieldConditions: ['Interval'] },
    ],
    channel: ['Color', 'Length'],
    recRate: 'Recommended',
  },

  /**
   * WIP: unavailable until completed
   */
  // interval_column_chart: {
  //   id: 'interval_column_chart',
  //   name: 'Interval Column Chart',
  //   alias: [],
  //   family: [],
  //   def: '',
  //   purpose: [],
  //   coord: [],
  //   category: [],
  //   shape: [],
  //   dataPres: [],
  //   channel: [],
  //   recRate: 'Recommended',
  // },

  range_column_chart: {
    id: 'range_column_chart',
    name: 'Range Column Chart',
    alias: [],
    family: ['ColumnCharts'],
    def: 'A column chart that does not have to start from zero axis.',
    purpose: ['Comparison'],
    coord: ['Cartesian2D'],
    category: ['Statistic'],
    shape: ['Bars'],
    dataPres: [
      { minQty: 2, maxQty: 2, fieldConditions: ['Interval', 'Ordinal'] },
      { minQty: 1, maxQty: 1, fieldConditions: ['Nominal'] },
    ],
    channel: ['Length'],
    recRate: 'Recommended',
  },

  waterfall_chart: {
    id: 'waterfall_chart',
    name: 'Waterfall Chart',
    alias: ['Flying Bricks Chart', 'Mario Chart', 'Bridge Chart', 'Cascade Chart'],
    family: ['ColumnCharts'],
    def: 'A waterfall chart is used to portray how an initial value is affected by a series of intermediate positive or negative values',
    purpose: ['Comparison', 'Trend'],
    coord: ['Cartesian2D'],
    category: ['Statistic'],
    shape: ['Bars'],
    dataPres: [
      { minQty: 1, maxQty: 1, fieldConditions: ['Ordinal', 'Time', 'Nominal'] },
      { minQty: 1, maxQty: 1, fieldConditions: ['Interval'] },
    ],
    channel: ['Color', 'Length', 'Position'],
    recRate: 'Recommended',
  },

  histogram: {
    id: 'histogram',
    name: 'Histogram',
    alias: [],
    family: ['ColumnCharts'],
    def: 'A histogram is an accurate representation of the distribution of numerical data.',
    purpose: ['Distribution'],
    coord: ['Cartesian2D'],
    category: ['Statistic'],
    shape: ['Bars'],
    dataPres: [{ minQty: 1, maxQty: 1, fieldConditions: ['Interval'] }],
    channel: ['Position'],
    recRate: 'Recommended',
  },

  bar_chart: {
    id: 'bar_chart',
    name: 'Bar Chart',
    alias: ['Bars'],
    family: ['BarCharts'],
    def: 'A bar chart uses series of bars to display the value of the dimension. The vertical axis shows the classification dimension and the horizontal axis shows the corresponding value.',
    purpose: ['Comparison', 'Distribution', 'Rank'],
    coord: ['Cartesian2D'],
    category: ['Statistic'],
    shape: ['Bars'],
    dataPres: [
      { minQty: 1, maxQty: 2, fieldConditions: ['Nominal', 'Ordinal'] },
      { minQty: 1, maxQty: 1, fieldConditions: ['Interval'] },
    ],
    channel: ['Position', 'Color'],
    recRate: 'Recommended',
  },

  grouped_bar_chart: {
    id: 'grouped_bar_chart',
    name: 'Grouped Bar Chart',
    alias: ['Grouped Bar'],
    family: ['BarCharts'],
    def: 'A grouped bar chart uses bars of different colors to form a group to display the values of the dimensions. The vertical axis indicates the grouping of categories, the color indicates the categories, and the horizontal axis shows the corresponding value.',
    purpose: ['Comparison', 'Distribution', 'Rank'],
    coord: ['Cartesian2D'],
    category: ['Statistic'],
    shape: ['Bars'],
    dataPres: [
      { minQty: 2, maxQty: 2, fieldConditions: ['Nominal', 'Ordinal'] },
      { minQty: 1, maxQty: 1, fieldConditions: ['Interval'] },
    ],
    channel: ['Color', 'Position'],
    recRate: 'Recommended',
  },

  stacked_bar_chart: {
    id: 'stacked_bar_chart',
    name: 'Stacked Bar Chart',
    alias: ['Stacked Bar'],
    family: ['BarCharts'],
    def: 'A stacked bar chart uses stacked bars of different colors to display the values for each dimension. The vertical axis indicates the first classification dimension, the color indicates the second classification dimension, and the horizontal axis shows the corresponding value.',
    purpose: ['Comparison', 'Composition', 'Distribution', 'Rank'],
    coord: ['Cartesian2D'],
    category: ['Statistic'],
    shape: ['Bars'],
    dataPres: [
      { minQty: 2, maxQty: 2, fieldConditions: ['Nominal', 'Ordinal'] },
      { minQty: 1, maxQty: 1, fieldConditions: ['Interval'] },
    ],
    channel: ['Color', 'Length', 'Position'],
    recRate: 'Recommended',
  },

  percent_stacked_bar_chart: {
    id: 'percent_stacked_bar_chart',
    name: 'Percent Stacked Bar Chart',
    alias: ['Percent Stacked Bar', '% Stacked Bar', '100% Stacked Bar'],
    family: ['BarCharts'],
    def: 'A percent stacked column chart uses stacked bars of different colors to display the values for each dimension. The vertical axis indicates the first classification dimension, the color indicates the second classification dimension, and the horizontal axis shows the percentage of the corresponding classification.',
    purpose: ['Comparison', 'Composition', 'Distribution', 'Proportion'],
    coord: ['Cartesian2D'],
    category: ['Statistic'],
    shape: ['Bars'],
    dataPres: [
      { minQty: 2, maxQty: 2, fieldConditions: ['Nominal', 'Ordinal'] },
      { minQty: 1, maxQty: 1, fieldConditions: ['Interval'] },
    ],
    channel: ['Color', 'Length'],
    recRate: 'Recommended',
  },

  /**
   * WIP: unavailable until completed
   */
  // interval_bar_chart: {
  //   id: 'interval_bar_chart',
  //   name: 'Interval Bar Chart',
  //   alias: [],
  //   family: [],
  //   def: '',
  //   purpose: [],
  //   coord: [],
  //   category: [],
  //   shape: [],
  //   dataPres: [],
  //   channel: [],
  //   recRate: 'Recommended',
  // },

  range_bar_chart: {
    id: 'range_bar_chart',
    name: 'Range Bar Chart',
    alias: [],
    family: ['BarCharts'],
    def: 'A bar chart that does not have to start from zero axis.',
    purpose: ['Comparison'],
    coord: ['Cartesian2D'],
    category: ['Statistic'],
    shape: ['Bars'],
    dataPres: [
      { minQty: 2, maxQty: 2, fieldConditions: ['Interval'] },
      { minQty: 1, maxQty: 1, fieldConditions: ['Nominal', 'Ordinal'] },
    ],
    channel: ['Length'],
    recRate: 'Recommended',
  },

  radial_bar_chart: {
    id: 'radial_bar_chart',
    name: 'Radial Bar Chart',
    alias: ['Radial Column Chart'],
    family: ['BarCharts'],
    def: 'A bar chart that is plotted in the polar coordinate system. The axis along radius shows the classification dimension and the angle shows the corresponding value.',
    purpose: ['Comparison', 'Distribution', 'Rank'],
    coord: ['Polar'],
    category: ['Statistic'],
    shape: ['Round'],
    dataPres: [
      { minQty: 1, maxQty: 2, fieldConditions: ['Nominal', 'Ordinal'] },
      { minQty: 1, maxQty: 1, fieldConditions: ['Interval'] },
    ],
    channel: ['Angle', 'Color'],
    recRate: 'Recommended',
  },

  /**
   * WIP: unavailable until completed
   */
  // mirror_bar_chart: {
  //   id: 'mirror_bar_chart',
  //   name: 'Mirror Bar Chart',
  //   alias: [],
  //   family: [],
  //   def: '',
  //   purpose: [],
  //   coord: [],
  //   category: [],
  //   shape: [],
  //   dataPres: [],
  //   channel: [],
  //   recRate: 'Recommended',
  // },

  bullet_chart: {
    id: 'bullet_chart',
    name: 'Bullet Chart',
    alias: [],
    family: ['BarCharts'],
    def: 'A bullet graph is a variation of a bar graph developed by Stephen Few. Seemingly inspired by the traditional thermometer charts and progress bars found in many dashboards, the bullet graph serves as a replacement for dashboard gauges and meters.',
    purpose: ['Proportion'],
    coord: ['Cartesian2D'],
    category: ['Statistic'],
    shape: ['Bars'],
    dataPres: [
      { minQty: 3, maxQty: 3, fieldConditions: ['Interval'] },
      { minQty: 1, maxQty: 1, fieldConditions: ['Nominal', 'Ordinal'] },
    ],
    channel: ['Position', 'Color'],
    recRate: 'Recommended',
  },

  pie_chart: {
    id: 'pie_chart',
    name: 'Pie Chart',
    alias: ['Circle Chart', 'Pie'],
    family: ['PieCharts'],
    def: 'A pie chart is a chart that the classification and proportion of data are represented by the color and arc length (angle, area) of the sector.',
    purpose: ['Comparison', 'Composition', 'Proportion'],
    coord: ['Polar'],
    category: ['Statistic'],
    shape: ['Round'],
    dataPres: [
      { minQty: 1, maxQty: 1, fieldConditions: ['Nominal', 'Ordinal'] },
      { minQty: 1, maxQty: 1, fieldConditions: ['Interval'] },
    ],
    channel: ['Angle', 'Area', 'Color'],
    recRate: 'Use with Caution',
  },

  donut_chart: {
    id: 'donut_chart',
    name: 'Donut Chart',
    alias: ['Donut', 'Doughnut', 'Doughnut Chart', 'Ring Chart'],
    family: ['PieCharts'],
    def: 'A donut chart is a variation on a Pie chart except it has a round hole in the center which makes it look like a donut.',
    purpose: ['Comparison', 'Composition', 'Proportion'],
    coord: ['Polar'],
    category: ['Statistic'],
    shape: ['Round'],
    dataPres: [
      { minQty: 1, maxQty: 1, fieldConditions: ['Nominal', 'Ordinal'] },
      { minQty: 1, maxQty: 1, fieldConditions: ['Interval'] },
    ],
    channel: ['ArcLength'],
    recRate: 'Recommended',
  },

  nested_pie_chart: {
    id: 'nested_pie_chart',
    name: 'Nested Pie Chart',
    alias: ['Nested Circle Chart', 'Nested Pie', 'Nested Donut Chart'],
    family: ['PieCharts'],
    def: 'A nested pie chart is a chart that contains several donut charts, where all the donut charts share the same center in position.',
    purpose: ['Comparison', 'Composition', 'Proportion'],
    coord: ['Polar'],
    category: ['Statistic'],
    shape: ['Round'],
    dataPres: [
      { minQty: 1, maxQty: 1, fieldConditions: ['Nominal', 'Ordinal'] },
      { minQty: 1, maxQty: '*', fieldConditions: ['Interval'] },
    ],
    channel: ['Angle', 'Area', 'Color', 'Position'],
    recRate: 'Use with Caution',
  },

  rose_chart: {
    id: 'rose_chart',
    name: 'Rose Chart',
    alias: ['Nightingale Chart', 'Polar Area Chart', 'Coxcomb Chart'],
    family: ['PieCharts'],
    def: 'Nightingale Rose Chart is a peculiar combination of the Radar Chart and Stacked Column Chart types of data visualization.',
    purpose: ['Comparison', 'Composition', 'Proportion'],
    coord: ['Polar'],
    category: ['Statistic'],
    shape: ['Round'],
    dataPres: [
      { minQty: 1, maxQty: 1, fieldConditions: ['Nominal', 'Ordinal'] },
      { minQty: 1, maxQty: 1, fieldConditions: ['Interval'] },
    ],
    channel: ['Angle', 'Color', 'Length'],
    recRate: 'Use with Caution',
  },

  scatter_plot: {
    id: 'scatter_plot',
    name: 'Scatter Plot',
    alias: ['Scatter Chart', 'Scatterplot'],
    family: ['ScatterCharts'],
    def: 'A scatter plot is a type of plot or mathematical diagram using Cartesian coordinates to display values for typically two variables for series of data.',
    purpose: ['Comparison', 'Distribution', 'Anomaly'],
    coord: ['Cartesian2D'],
    category: ['Statistic'],
    shape: ['Scatter'],
    dataPres: [
      { minQty: 2, maxQty: 2, fieldConditions: ['Interval'] },
      { minQty: 0, maxQty: 1, fieldConditions: ['Nominal'] },
    ],
    channel: ['Color', 'Position'],
    recRate: 'Recommended',
  },

  bubble_chart: {
    id: 'bubble_chart',
    name: 'Bubble Chart',
    alias: ['Bubble Chart'],
    family: ['ScatterCharts'],
    def: 'A bubble chart is a type of chart that displays four dimensions of data with x, y positions, circle size and circle color.',
    purpose: ['Comparison', 'Distribution'],
    coord: ['Cartesian2D'],
    category: ['Statistic'],
    shape: ['Scatter'],
    dataPres: [
      { minQty: 3, maxQty: 3, fieldConditions: ['Interval'] },
      { minQty: 0, maxQty: 1, fieldConditions: ['Nominal'] },
    ],
    channel: ['Color', 'Position', 'Size'],
    recRate: 'Recommended',
  },

  treemap: {
    id: 'treemap',
    name: 'Treemap',
    alias: [],
    family: ['TreeGraph'],
    def: 'A visual representation of a data tree with nodes. Each node is displayed as a rectangle, sized and colored according to values that you assign.',
    purpose: ['Composition', 'Comparison', 'Hierarchy'],
    coord: ['Cartesian2D'],
    category: ['Statistic'],
    shape: ['Square'],
    dataPres: [
      { minQty: 1, maxQty: '*', fieldConditions: ['Nominal'] },
      { minQty: 1, maxQty: 1, fieldConditions: ['Interval'] },
    ],
    channel: ['Color', 'Area'],
    recRate: 'Recommended',
  },

  funnel_chart: {
    id: 'funnel_chart',
    name: 'Funnel Chart',
    alias: [],
    family: ['FunnelCharts'],
    def: 'A funnel chart is often used to represent stages in a sales process and show the amount of potential revenue for each stage.',
    purpose: ['Trend'],
    coord: ['SymmetricCartesian'],
    category: ['Statistic'],
    shape: ['Symmetric'],
    dataPres: [
      { minQty: 1, maxQty: 1, fieldConditions: ['Ordinal'] },
      { minQty: 1, maxQty: 1, fieldConditions: ['Interval'] },
    ],
    channel: ['Color', 'Length'],
    recRate: 'Recommended',
  },

  /**
   * WIP: unavailable until completed
   */
  // overlapping_funnel_chart: {
  //   id: 'overlapping_funnel_chart',
  //   name: 'Overlapping Funnel Chart',
  //   alias: [],
  //   family: [],
  //   def: '',
  //   purpose: [],
  //   coord: [],
  //   category: [],
  //   shape: [],
  //   dataPres: [],
  //   channel: [],
  //   recRate: 'Recommended',
  // },

  mirror_funnel_chart: {
    id: 'mirror_funnel_chart',
    name: 'Mirror Funnel Chart',
    alias: ['Contrast Funnel Chart'],
    family: ['FunnelCharts'],
    def: 'A mirror funnel chart is a funnel chart divided into two series by a central axis.',
    purpose: ['Comparison', 'Trend'],
    coord: ['SymmetricCartesian'],
    category: ['Statistic'],
    shape: ['Symmetric'],
    dataPres: [
      { minQty: 1, maxQty: 1, fieldConditions: ['Ordinal'] },
      { minQty: 1, maxQty: 1, fieldConditions: ['Interval'] },
      { minQty: 1, maxQty: 1, fieldConditions: ['Nominal'] },
    ],
    channel: ['Color', 'Length', 'Direction'],
    recRate: 'Recommended',
  },

  box_plot: {
    id: 'box_plot',
    name: 'Box Plot',
    alias: ['Box and Whisker Plot', 'boxplot'],
    family: ['BarCharts'],
    def: 'A box plot is often used to graphically depict groups of numerical data through their quartiles. Box plots may also have lines extending from the boxes indicating variability outside the upper and lower quartiles. Outliers may be plotted as individual points.',
    purpose: ['Distribution', 'Anomaly'],
    coord: ['Cartesian2D'],
    category: ['Statistic'],
    shape: ['Bars'],
    dataPres: [
      { minQty: 1, maxQty: 1, fieldConditions: ['Nominal', 'Ordinal'] },
      { minQty: 1, maxQty: 1, fieldConditions: ['Interval'] },
    ],
    channel: ['Position'],
    recRate: 'Recommended',
  },

  heatmap: {
    id: 'heatmap',
    name: 'Heatmap',
    alias: [],
    family: ['HeatmapCharts'],
    def: 'A heatmap is a graphical representation of data where the individual values contained in a matrix are represented as colors.',
    purpose: ['Distribution'],
    coord: ['Cartesian2D'],
    category: ['Statistic'],
    shape: ['Square'],
    dataPres: [
      { minQty: 2, maxQty: 2, fieldConditions: ['Nominal', 'Ordinal'] },
      { minQty: 1, maxQty: 1, fieldConditions: ['Interval'] },
    ],
    channel: ['Color', 'Position'],
    recRate: 'Recommended',
  },

  density_heatmap: {
    id: 'density_heatmap',
    name: 'Density Heatmap',
    alias: ['Heatmap'],
    family: ['HeatmapCharts'],
    def: 'A density heatmap is a heatmap for representing the density of dots.',
    purpose: ['Distribution'],
    coord: ['Cartesian2D'],
    category: ['Statistic'],
    shape: ['Area'],
    dataPres: [{ minQty: 3, maxQty: 3, fieldConditions: ['Interval'] }],
    channel: ['Color', 'Position', 'Area'],
    recRate: 'Recommended',
  },

  /**
   * WIP: unavailable until completed
   */
  // gauge_chart: {
  //   id: 'gauge_chart',
  //   name: 'Gauge Chart',
  //   alias: [],
  //   family: [],
  //   def: '',
  //   purpose: [],
  //   coord: [],
  //   category: [],
  //   shape: [],
  //   dataPres: [],
  //   channel: [],
  //   recRate: 'Recommended',
  // },

  radar_chart: {
    id: 'radar_chart',
    name: 'Radar Chart',
    alias: ['Web Chart', 'Spider Chart', 'Star Chart', 'Cobweb Chart', 'Irregular Polygon', 'Kiviat diagram'],
    family: ['RadarCharts'],
    def: 'A radar chart maps series of data volume of multiple dimensions onto the axes. Starting at the same center point, usually ending at the edge of the circle, connecting the same set of points using lines.',
    purpose: ['Comparison'],
    coord: ['Radar'],
    category: ['Statistic'],
    shape: ['Round'],
    dataPres: [
      { minQty: 1, maxQty: 2, fieldConditions: ['Nominal'] },
      { minQty: 1, maxQty: 1, fieldConditions: ['Interval'] },
    ],
    channel: ['Color', 'Position'],
    recRate: 'Recommended',
  },

  wordcloud: {
    id: 'wordcloud',
    name: 'Word Cloud',
    alias: ['Wordle', 'Tag Cloud', 'Text Cloud'],
    family: ['Others'],
    def: 'A word cloud is a collection, or cluster, of words depicted in different sizes, colors, and shapes, which takes a piece of text as input. Typically, the font size in the word cloud is encoded as the word frequency in the input text.',
    purpose: ['Proportion'],
    coord: ['Cartesian2D'],
    category: ['Diagram'],
    shape: ['Scatter'],
    dataPres: [
      { minQty: 1, maxQty: 1, fieldConditions: ['Nominal'] },
      { minQty: 0, maxQty: 1, fieldConditions: ['Interval'] },
    ],
    channel: ['Size', 'Position', 'Color'],
    recRate: 'Recommended',
  },

  candlestick_chart: {
    id: 'candlestick_chart',
    name: 'Candlestick Chart',
    alias: ['Japanese Candlestick Chart)'],
    family: ['BarCharts'],
    def: 'A candlestick chart is a specific version of box plot, which is a style of financial chart used to describe price movements of a security, derivative, or currency.',
    purpose: ['Trend', 'Distribution'],
    coord: ['Cartesian2D'],
    category: ['Statistic'],
    shape: ['Bars'],
    dataPres: [
      { minQty: 1, maxQty: 1, fieldConditions: ['Time'] },
      { minQty: 1, maxQty: 1, fieldConditions: ['Interval'] },
    ],
    channel: ['Position'],
    recRate: 'Recommended',
  },

  compact_box_tree: {
    id: 'compact_box_tree',
    name: 'CompactBox Tree',
    alias: [],
    family: ['TreeGraph'],
    def: 'A type of tree graph layout which arranges the nodes with same depth on the same level.',
    purpose: ['Relation', 'Hierarchy'],
    coord: ['Cartesian2D'],
    category: ['Graph'],
    shape: ['Network'],
    dataPres: [{ minQty: 1, maxQty: '*', fieldConditions: ['Nominal'] }],
    channel: ['Color', 'Size', 'Opacity', 'Stroke', 'LineWidth'],
    recRate: 'Recommended',
  },

  dendrogram: {
    id: 'dendrogram',
    name: 'Dendrogram',
    alias: [],
    family: ['TreeGraph'],
    def: 'A type of tree graph layout which arranges the leaves on the same level.',
    purpose: ['Relation', 'Hierarchy'],
    coord: ['Cartesian2D'],
    category: ['Graph'],
    shape: ['Network'],
    dataPres: [{ minQty: 1, maxQty: '*', fieldConditions: ['Nominal'] }],
    channel: ['Color', 'Size', 'Opacity', 'Stroke', 'LineWidth'],
    recRate: 'Recommended',
  },

  indented_tree: {
    id: 'indented_tree',
    name: 'Indented Tree Layout',
    alias: [],
    family: ['TreeGraph'],
    def: 'A type of tree graph layout where the hierarchy of tree is represented by the horizontal indentation, and each element will occupy one row/column. It is commonly used to represent the file directory structure.',
    purpose: ['Relation', 'Hierarchy'],
    coord: ['Cartesian2D'],
    category: ['Graph'],
    shape: ['Network'],
    dataPres: [{ minQty: 1, maxQty: '*', fieldConditions: ['Nominal'] }],
    channel: ['Color', 'Size', 'Opacity', 'Stroke', 'LineWidth'],
    recRate: 'Recommended',
  },

  radial_tree: {
    id: 'radial_tree',
    name: 'Radial Tree Layout',
    alias: [],
    family: ['TreeGraph'],
    def: 'A type of tree graph layout which places the root at the center, and the branches around the root radially.',
    purpose: ['Relation', 'Hierarchy'],
    coord: ['Cartesian2D'],
    category: ['Graph'],
    shape: ['Network'],
    dataPres: [{ minQty: 1, maxQty: '*', fieldConditions: ['Nominal'] }],
    channel: ['Color', 'Size', 'Opacity', 'Stroke', 'LineWidth'],
    recRate: 'Recommended',
  },

  flow_diagram: {
    id: 'flow_diagram',
    name: 'Flow Diagram',
    alias: ['Dagre Graph Layout', 'Dagre', 'Flow Chart'],
    family: ['GeneralGraph'],
    def: 'Directed flow graph.',
    purpose: ['Relation', 'Flow'],
    coord: ['Cartesian2D'],
    category: ['Graph'],
    shape: ['Network'],
    dataPres: [{ minQty: 1, maxQty: '*', fieldConditions: ['Nominal'] }],
    channel: ['Color', 'Size', 'Opacity', 'Stroke', 'LineWidth'],
    recRate: 'Recommended',
  },

  fruchterman_layout_graph: {
    id: 'fruchterman_layout_graph',
    name: 'Fruchterman Graph Layout',
    alias: [],
    family: ['GeneralGraph'],
    def: 'A type of force directed graph layout.',
    purpose: ['Relation'],
    coord: ['Cartesian2D'],
    category: ['Graph'],
    shape: ['Network'],
    dataPres: [{ minQty: 1, maxQty: '*', fieldConditions: ['Nominal'] }],
    channel: ['Color', 'Size', 'Opacity', 'Stroke', 'LineWidth'],
    recRate: 'Recommended',
  },

  force_directed_layout_graph: {
    id: 'force_directed_layout_graph',
    name: 'Force Directed Graph Layout',
    alias: [],
    family: ['GeneralGraph'],
    def: 'The classical force directed graph layout.',
    purpose: ['Relation'],
    coord: ['Cartesian2D'],
    category: ['Graph'],
    shape: ['Network'],
    dataPres: [{ minQty: 1, maxQty: '*', fieldConditions: ['Nominal'] }],
    channel: ['Color', 'Size', 'Opacity', 'Stroke', 'LineWidth'],
    recRate: 'Recommended',
  },

  fa2_layout_graph: {
    id: 'fa2_layout_graph',
    name: 'Force Atlas 2 Graph Layout',
    alias: ['FA2 Layout'],
    family: ['GeneralGraph'],
    def: 'A type of force directed graph layout algorithm. It focuses more on the degree of the node when calculating the force than the classical force-directed algorithm .',
    purpose: ['Relation'],
    coord: ['Cartesian2D'],
    category: ['Graph'],
    shape: ['Network'],
    dataPres: [{ minQty: 1, maxQty: '*', fieldConditions: ['Nominal'] }],
    channel: ['Color', 'Size', 'Opacity', 'Stroke', 'LineWidth'],
    recRate: 'Recommended',
  },

  mds_layout_graph: {
    id: 'mds_layout_graph',
    name: 'Multi-Dimensional Scaling Layout',
    alias: ['MDS Layout'],
    family: ['GeneralGraph'],
    def: 'A type of dimension reduction algorithm that could be used for calculating graph layout. MDS (Multidimensional scaling) is used for project high dimensional data onto low dimensional space.',
    purpose: ['Relation'],
    coord: ['Cartesian2D'],
    category: ['Graph'],
    shape: ['Network'],
    dataPres: [{ minQty: 1, maxQty: '*', fieldConditions: ['Nominal'] }],
    channel: ['Color', 'Size', 'Opacity', 'Stroke', 'LineWidth'],
    recRate: 'Recommended',
  },

  circular_layout_graph: {
    id: 'circular_layout_graph',
    name: 'Circular Graph Layout',
    alias: [],
    family: ['GeneralGraph'],
    def: 'A type of graph layout which arranges all the nodes on a circle.',
    purpose: ['Relation'],
    coord: ['Cartesian2D'],
    category: ['Graph'],
    shape: ['Network'],
    dataPres: [{ minQty: 1, maxQty: '*', fieldConditions: ['Nominal'] }],
    channel: ['Color', 'Size', 'Opacity', 'Stroke', 'LineWidth'],
    recRate: 'Recommended',
  },

  spiral_layout_graph: {
    id: 'spiral_layout_graph',
    name: 'Spiral Graph Layout',
    alias: [],
    family: ['GeneralGraph'],
    def: 'A type of graph layout which arranges all the nodes along a spiral line.',
    purpose: ['Relation'],
    coord: ['Cartesian2D'],
    category: ['Graph'],
    shape: ['Network'],
    dataPres: [{ minQty: 1, maxQty: '*', fieldConditions: ['Nominal'] }],
    channel: ['Color', 'Size', 'Opacity', 'Stroke', 'LineWidth'],
    recRate: 'Recommended',
  },

  radial_layout_graph: {
    id: 'radial_layout_graph',
    name: 'Radial Graph Layout',
    alias: [],
    family: ['GeneralGraph'],
    def: 'A type of graph layout which places a focus node on the center and the others on the concentrics centered at the focus node according to the shortest path length to the it.',
    purpose: ['Relation'],
    coord: ['Cartesian2D'],
    category: ['Graph'],
    shape: ['Network'],
    dataPres: [{ minQty: 1, maxQty: '*', fieldConditions: ['Nominal'] }],
    channel: ['Color', 'Size', 'Opacity', 'Stroke', 'LineWidth'],
    recRate: 'Recommended',
  },

  concentric_layout_graph: {
    id: 'concentric_layout_graph',
    name: 'Concentric Graph Layout',
    alias: [],
    family: ['GeneralGraph'],
    def: 'A type of graph layout which arranges the nodes on concentrics.',
    purpose: ['Relation'],
    coord: ['Cartesian2D'],
    category: ['Graph'],
    shape: ['Network'],
    dataPres: [{ minQty: 1, maxQty: '*', fieldConditions: ['Nominal'] }],
    channel: ['Color', 'Size', 'Opacity', 'Stroke', 'LineWidth'],
    recRate: 'Recommended',
  },

  grid_layout_graph: {
    id: 'grid_layout_graph',
    name: 'Grid Graph Layout',
    alias: [],
    family: ['GeneralGraph'],
    def: 'A type of graph layout arranges the nodes on grids.',
    purpose: ['Relation'],
    coord: ['Cartesian2D'],
    category: ['Graph'],
    shape: ['Network'],
    dataPres: [{ minQty: 1, maxQty: '*', fieldConditions: ['Nominal'] }],
    channel: ['Color', 'Size', 'Opacity', 'Stroke', 'LineWidth'],
    recRate: 'Recommended',
  },

  arc_diagram: {
    id: 'arc_diagram',
    name: 'Arc Diagram',
    alias: [],
    family: ['GeneralGraph'],
    def: 'A graph where the edges are represented as arcs.',
    purpose: ['Relation'],
    coord: ['Cartesian2D'],
    category: ['Graph'],
    shape: ['Network'],
    dataPres: [{ minQty: 1, maxQty: '*', fieldConditions: ['Nominal'] }],
    channel: ['Color', 'Size', 'Opacity', 'Stroke', 'LineWidth'],
    recRate: 'Recommended',
  },

  chord_diagram: {
    id: 'chord_diagram',
    name: 'Chord Diagram',
    alias: [],
    family: ['GeneralGraph'],
    def: 'A graphical method of displaying the inter-relationships between data in a matrix. The data are arranged radially around a circle with the relationships between the data points typically drawn as arcs connecting the data.',
    purpose: ['Relation'],
    coord: ['Cartesian2D'],
    category: ['Graph'],
    shape: ['Network'],
    dataPres: [{ minQty: 1, maxQty: '*', fieldConditions: ['Nominal'] }],
    channel: ['Color', 'Size', 'Opacity', 'Stroke', 'LineWidth'],
    recRate: 'Recommended',
  },

  non_ribbon_chord_diagram: {
    id: 'non_ribbon_chord_diagram',
    name: 'Non-Ribbon Chord Diagram',
    alias: [],
    family: ['GeneralGraph'],
    def: 'A stripped-down version of a Chord Diagram, with only the connection lines showing. This provides more emphasis on the connections within the data.',
    purpose: ['Relation'],
    coord: ['Cartesian2D'],
    category: ['Graph'],
    shape: ['Network'],
    dataPres: [{ minQty: 1, maxQty: '*', fieldConditions: ['Nominal'] }],
    channel: ['Color', 'Size', 'Opacity', 'Stroke', 'LineWidth'],
    recRate: 'Recommended',
  },

  sankey_diagram: {
    id: 'sankey_diagram',
    name: 'Sankey Diagram',
    alias: [],
    family: ['GeneralGraph'],
    def: 'A graph shows the flows with weights between objects.',
    purpose: ['Flow', 'Trend', 'Relation'],
    coord: ['Cartesian2D'],
    category: ['Graph'],
    shape: ['Network'],
    dataPres: [{ minQty: 1, maxQty: '*', fieldConditions: ['Nominal'] }],
    channel: ['Color', 'Size', 'Opacity', 'Stroke', 'LineWidth'],
    recRate: 'Recommended',
  },

  /**
   * WIP: unavailable until completed
   */
  // symbol_map: {
  //   id: 'symbol_map',
  //   name: 'Symbol Map',
  //   alias: [],
  //   family: ['PointLayer'],
  //   def: 'Overlay symbols on the map as glyphs.',
  //   purpose: ['Distribution', 'Comparison', 'Spatial'],
  //   coord: ['Geo'],
  //   category: ['Map'],
  //   shape: ['Scatter', 'Map'],
  //   dataPres: [],
  //   channel: ['Position'],
  //   recRate: 'Recommended',
  // },

  /**
   * WIP: unavailable until completed
   */
  // chart_map: {
  //   id: 'chart_map',
  //   name: 'Chart Map',
  //   alias: [],
  //   family: ['PointLayer'],
  //   def: 'Overlay charts on the map as glyphs.',
  //   purpose: ['Composition', 'Distribution', 'Comparison', 'Spatial'],
  //   coord: ['Geo'],
  //   category: ['Map'],
  //   shape: ['Map'],
  //   dataPres: [],
  //   channel: ['Position'],
  //   recRate: 'Recommended',
  // },

  /**
   * WIP: unavailable until completed
   */
  // column_map_3d: {
  //   id: 'column_map_3d',
  //   name: '3D Column Map',
  //   alias: [],
  //   family: ['PointLayer'],
  //   def: 'Maps that use height of 3D columns to represent distribution.',
  //   purpose: ['Distribution', 'Comparison', 'Spatial'],
  //   coord: [],
  //   category: ['Map'],
  //   shape: ['Map'],
  //   dataPres: [],
  //   channel: ['Position', 'Length'],
  //   recRate: 'Recommended',
  // },

  /**
   * WIP: unavailable until completed
   */
  // scatter_map: {
  //   id: 'scatter_map',
  //   name: 'Scatter Map',
  //   alias: [],
  //   family: ['PointLayer'],
  //   def: 'Overlay dots with same size on the map as glyphs.',
  //   purpose: ['Distribution', 'Spatial'],
  //   coord: ['Geo'],
  //   category: ['Map'],
  //   shape: ['Scatter', 'Map'],
  //   dataPres: [],
  //   channel: ['Size', 'Color', 'Position', 'Opacity'],
  //   recRate: 'Recommended',
  // },

  /**
   * WIP: unavailable until completed
   */
  // path_map: {
  //   id: 'path_map',
  //   name: 'Path Map',
  //   alias: [],
  //   family: ['LineLayer'],
  //   def: 'Overlay paths on the map as glyphs.',
  //   purpose: ['Spatial'],
  //   coord: ['Geo'],
  //   category: ['Map'],
  //   shape: ['Lines'],
  //   dataPres: [],
  //   channel: ['Size', 'Color', 'Position', 'Opacity'],
  //   recRate: 'Recommended',
  // },

  /**
   * WIP: unavailable until completed
   */
  // isoline_map: {
  //   id: 'isoline_map',
  //   name: 'Isoline Map',
  //   alias: [],
  //   family: ['LineLayer'],
  //   def: '',
  //   purpose: ['Comparison'],
  //   coord: ['Geo'],
  //   category: ['Map'],
  //   shape: ['Lines'],
  //   dataPres: [],
  //   channel: ['Size', 'Color', 'Position', 'Opacity'],
  //   recRate: 'Recommended',
  // },

  /**
   * WIP: unavailable until completed
   */
  // arc_map_3d: {
  //   id: 'arc_map_3d',
  //   name: '3D Arc Map',
  //   alias: [],
  //   family: ['LineLayer'],
  //   def: '',
  //   purpose: ['Relation', 'Spatial'],
  //   coord: ['Geo'],
  //   category: ['Map'],
  //   shape: ['Lines'],
  //   dataPres: [],
  //   channel: ['Size', 'Color', 'Position', 'Opacity'],
  //   recRate: 'Recommended',
  // },

  /**
   * WIP: unavailable until completed
   */
  // choropleth_map: {
  //   id: 'choropleth_map',
  //   name: 'Choropleth Map',
  //   alias: [],
  //   family: ['PolygonLayer'],
  //   def: 'A choropleth map is a type of thematic map in which areas are shaded or patterned in proportion to a statistical variable that represents an aggregate summary of a geographic characteristic within each area, such as population density or per-capita income.',
  //   purpose: ['Comparison', 'Spatial'],
  //   coord: ['Geo'],
  //   category: ['Map'],
  //   shape: ['Area', 'Map'],
  //   dataPres: [],
  //   channel: ['Color', 'Position', 'Opacity', 'Stroke', 'LineWidth'],
  //   recRate: 'Recommended',
  // },

  /**
   * WIP: unavailable until completed
   */
  // choropleth_map_3d: {
  //   id: 'choropleth_map_3d',
  //   name: '3D Choropleth Map',
  //   alias: ['Extrude Map'],
  //   family: ['PolygonLayer'],
  //   def: '',
  //   purpose: ['Comparison'],
  //   coord: ['Geo'],
  //   category: ['Map'],
  //   shape: ['Area', 'Map'],
  //   dataPres: [],
  //   channel: ['Size', 'Color', 'Position', 'Opacity'],
  //   recRate: 'Recommended',
  // },

  /**
   * WIP: unavailable until completed
   */
  // hexagonal_heat_map: {
  //   id: 'hexagonal_heat_map',
  //   name: 'Hexagonal Heat Map',
  //   alias: [],
  //   family: [],
  //   def: 'Dividing the map area using hexagons.',
  //   purpose: ['Distribution', 'Spatial'],
  //   coord: ['Geo'],
  //   category: ['Map'],
  //   shape: ['Area', 'Map'],
  //   dataPres: [],
  //   channel: ['Size', 'Color', 'Position', 'Opacity'],
  //   recRate: 'Recommended',
  // },

  /**
   * WIP: unavailable until completed
   */
  // hexagonal_heat_map_3d: {
  //   id: 'hexagonal_heat_map_3d',
  //   name: '3D Hexagonal Heat Map',
  //   alias: [],
  //   family: [],
  //   def: 'Dividing the 3D map area using hexagons.',
  //   purpose: ['Distribution'],
  //   coord: ['Geo'],
  //   category: ['Map'],
  //   shape: ['Map'],
  //   dataPres: [],
  //   channel: [],
  //   recRate: 'Recommended',
  // },

  /**
   * WIP: unavailable until completed
   */
  // classical_heat_map: {
  //   id: 'classical_heat_map',
  //   name: 'Classical Heat Map',
  //   alias: [],
  //   family: [],
  //   def: '',
  //   purpose: ['Distribution'],
  //   coord: ['Geo'],
  //   category: ['Map'],
  //   shape: ['Map'],
  //   dataPres: [],
  //   channel: ['Color', 'Position', 'Opacity'],
  //   recRate: 'Recommended',
  // },

  /**
   * WIP: unavailable until completed
   */
  // grid_heat_map: {
  //   id: 'grid_heat_map',
  //   name: 'Gird Heat Map',
  //   alias: [],
  //   family: [],
  //   def: '',
  //   purpose: ['Distribution'],
  //   coord: [],
  //   category: ['Map'],
  //   shape: ['Map'],
  //   dataPres: [],
  //   channel: ['Color', 'Position', 'Opacity'],
  //   recRate: 'Recommended',
  // },

  /**
   * WIP: unavailable until completed
   */
  // bubble_map: {
  //   id: 'bubble_map',
  //   name: 'Bubble Map',
  //   alias: [],
  //   family: ['PointLayer'],
  //   def: 'Overlay bubbles on the map as glyphs.',
  //   purpose: ['Distribution', 'Spatial'],
  //   coord: ['Geo'],
  //   category: ['Map'],
  //   shape: ['Scatter', 'Map'],
  //   dataPres: [],
  //   channel: ['Position', 'Color', 'Size'],
  //   recRate: 'Recommended',
  // },

  /**
   * WIP: unavailable until completed
   */
  // bubble_light_map: {
  //   id: 'bubble_light_map',
  //   name: 'Bubble Light Map',
  //   alias: [],
  //   family: ['PointLayer'],
  //   def: 'Overlay bubbles with different lightness on the map as glyphs.',
  //   purpose: ['Distribution', 'Spatial'],
  //   coord: ['Geo'],
  //   category: ['Map'],
  //   shape: ['Scatter', 'Map'],
  //   dataPres: [],
  //   channel: ['Position', 'Color', 'Size', 'Opacity'],
  //   recRate: 'Recommended',
  // },

  /**
   * WIP: unavailable until completed
   */
  // packed_circles: {
  //   id: 'packed_circles',
  //   name: 'Packed Circles',
  //   alias: [],
  //   family: [],
  //   def: '',
  //   purpose: [],
  //   coord: [],
  //   category: [],
  //   shape: [],
  //   dataPres: [],
  //   channel: [],
  //   recRate: 'Recommended',
  // },

  /**
   * WIP: unavailable until completed
   */
  // polar_treemap: {
  //   id: 'polar_treemap',
  //   name: 'Polar Treemap',
  //   alias: [],
  //   family: [],
  //   def: '',
  //   purpose: [],
  //   coord: [],
  //   category: [],
  //   shape: [],
  //   dataPres: [],
  //   channel: [],
  //   recRate: 'Recommended',
  // },

  /**
   * WIP: unavailable until completed
   */
  // sunburst_diagram: {
  //   id: 'sunburst_diagram',
  //   name: 'Sunburst',
  //   alias: [],
  //   family: [],
  //   def: '',
  //   purpose: [],
  //   coord: [],
  //   category: [],
  //   shape: [],
  //   dataPres: [],
  //   channel: [],
  //   recRate: 'Recommended',
  // },

  /**
   * WIP: unavailable until completed
   */
  // liquid_chart: {
  //   id: 'liquid_chart',
  //   name: 'Liquid Chart',
  //   alias: ['Liquid Ball', 'Progress Ball'],
  //   family: ['Others'],
  //   def: 'Liquid chart is a diagram to represent progress.',
  //   purpose: ['Composition'],
  //   coord: ['Other'],
  //   category: ['Diagram'],
  //   shape: ['Round'],
  //   dataPres: [{ minQty: 2, maxQty: 2, fieldConditions: ['Interval'] }],
  //   channel: ['Position'],
  //   recRate: 'Not Recommended',
  // },

  /**
   * WIP: unavailable until completed
   * @todo add channel 'Text'
   */
  // kpi_panel: {
  //   id: 'kpi_panel',
  //   name: 'KPI Panel',
  //   alias: ['KPI Panel'],
  //   family: ['Others'],
  //   def: 'KPI Panel is a card to show aggregated numbers',
  //   purpose: ['Value'],
  //   coord: ['Other'],
  //   category: ['Other'],
  //   shape: ['Other'],
  //   dataPres: [{ minQty: 1, maxQty: '*', fieldConditions: ['Interval'] }],
  //   channel: [''],
  //   recRate: 'Recommended',
  // },

  /**
   * WIP: unavailable until completed
   * @todo add channel 'Text'
   */
  // table: {
  //   id: 'table',
  //   name: 'Table',
  //   alias: ['Information Table'],
  //   family: ['Table'],
  //   def: 'A table consists of an ordered arrangement of rows and columns.',
  //   purpose: ['Value'],
  //   coord: ['Other'],
  //   category: ['Other'],
  //   shape: ['Other'],
  //   dataPres: [{ minQty: 0, maxQty: '*', fieldConditions: [...LEVEL_OF_MEASUREMENTS] }],
  //   channel: [],
  //   recRate: 'Recommended',
  // },
};
