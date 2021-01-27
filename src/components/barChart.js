import React, { useRef, useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

function BarChart() {
  const chart = useRef(null);

  let Countrydata = [
    {
      country: "Lithuania",
      litres: 501,
    },
    {
      country: "Czechia",
      litres: 301,
    },
    {
      country: "Ireland",
      litres: 201,
    },
    {
      country: "Germany",
      litres: 165,
    },
    {
      country: "Australia",
      litres: 139,
    },
    {
      country: "Austria",
      litres: 128,
    },
    {
      country: "UK",
      litres: 99,
    },
    {
      country: "Belgium",
      litres: 60,
    },
    {
      country: "The Netherlands",
      litres: 50,
    },
  ];

  useLayoutEffect(() => {
    let x = am4core.create("bardiv", am4charts.XYChart);

    x.paddingRight = 100;
    x.paddingLeft = 100;

    x.data = Countrydata;

    let dateAxis = x.xAxes.push(new am4charts.CategoryAxis());

    dateAxis.dataFields.category = "country";
    dateAxis.title.text = "Countries";

    let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Litres sold (M)";

    let series = x.series.push(new am4charts.ColumnSeries());
    series.name = "Sales";
    series.columns.template.tooltipText =
      "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
    series.columns.template.fill = am4core.color("#005cc8"); // fill
    series.dataFields.valueY = "litres";
    series.dataFields.categoryX = "country";

    let series2 = x.series.push(new am4charts.LineSeries());
    series2.name = "Units";
    series2.stroke = am4core.color("#CDA2AB");
    series2.strokeWidth = 3;
    series2.dataFields.valueY = "units";
    series2.dataFields.categoryX = "country";

    //tooltip showing on hover
    x.cursor = new am4charts.XYCursor();

    //Bar top Slider
    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    x.scrollbarX = scrollbarX;

    chart.current = x;

    return () => {
      x.dispose();
    };
  }, [Countrydata]);

  return (
    <div>
      <div id="bardiv" style={{ width: "100%", height: "500px" }}></div>
    </div>
  );
}

export default BarChart;
