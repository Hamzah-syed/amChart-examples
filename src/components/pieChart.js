import React, { useRef, useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

function PieChart() {
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
    let x = am4core.create("pieDiv", am4charts.PieChart);

    x.paddingRight = 100;
    x.paddingLeft = 100;

    x.data = Countrydata;

    // Add and configure Series
    let pieSeries = x.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    //tooltip showing on hover
    x.cursor = new am4charts.XYCursor();

    chart.current = x;

    return () => {
      x.dispose();
    };
  }, [Countrydata]);

  return (
    <div>
      <div id="pieDiv" style={{ width: "100%", height: "500px" }}></div>
    </div>
  );
}

export default PieChart;
