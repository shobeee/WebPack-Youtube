// // console.log('Hello from index.js');
import * as d3 from "d3";
// In your JavaScript file
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"

// // const svg = d3.select("body").append("svg").attr("width", 600).attr("height", 400);
// // const margin = { top: 20, right: 20, bottom: 30, left: 50 };
// // const width = 600 - margin.left - margin.right;
// // const height = 400 - margin.top - margin.bottom;

// // const years = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];
// // const gdp = [127.4, 135.7, 146.5, 158.1, 171.9, 187.3, 204.4, 224.1, 246.4, 223.5, 244.2, 267.9, 294.2, 321.3, 348.7, 319.4, 328.1, 340.3, 359.7, 378.2, 346.4, 376.1, 399.1];

// // const x = d3.scaleLinear().domain([d3.min(years), d3.max(years)]).range([0, width]);
// // const y = d3.scaleLinear().domain([d3.min(gdp), d3.max(gdp)]).range([height, 0]);

// // const svgGroup = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

// // svgGroup.append("g")
// //     .attr("transform", `translate(0, ${height})`)
// //     .call(d3.axisBottom(x).ticks(5).tickFormat(d3.format("d")));

// // svgGroup.append("g")
// //     .call(d3.axisLeft(y));

// // svgGroup.selectAll("rect")
// //     .data(gdp)
// //     .enter()
// //     .append("rect")
// //     .attr("x", (d, i) => x(years[i]))
// //     .attr("y", d => y(d))
// //     .attr("width", width / years.length)
// //     .attr("height", d => height - y(d))
// //     .attr("fill", "steelblue");

// //     console.log(y(gdp[1]))


const years = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];
const gdp = [127.4, 135.7, 146.5, 158.1, 171.9, 187.3, 204.4, 224.1, 246.4, 223.5, 244.2, 267.9, 294.2, 321.3, 348.7, 319.4, 328.1, 340.3, 359.7, 378.2, 346.4, 376.1, 399.1];
const margin = {
    top:40,
    bottom:40,
    left:40,
    right:40
}
const width = 400-margin.left-margin.right;
const height = 400-margin.top-margin.bottom;

const svg = d3.select("body").append("svg").attr("width",600).attr("height",500);

const xAxis =  d3.scaleLinear().domain([d3.min(years),d3.max(years)]).range([0,width]);
const yAxis = d3.scaleLinear().domain([d3.min(gdp),d3.max(gdp)]).range([height,0]);

const svgGroup = svg.append("g").attr("transform",`translate(${margin.left},${margin.right})`);

svgGroup.append("g").attr("transform",`translate(0,${height})`).call(d3.axisBottom(xAxis).ticks(6).tickFormat(d3.format("d")));
svgGroup.append("g").call(d3.axisLeft(yAxis));


svgGroup.selectAll("rect")
.data(gdp)
.enter()
.append("rect")
.attr("x",(d,i) => xAxis(years[i]))
.attr("y",(d,i)=> yAxis(d))
.attr("width",(d,i) =>width/years.length)
.attr("height",(d,i)=>height-yAxis(d))
.attr("fill","green") .on("mouseover", function () {
    d3.select(this).attr("fill", "red");
})
.on("mouseout", function () {
    d3.select(this).attr("fill", "green");
});



const svg2 = d3.select("#svg2").append("svg").attr("width",500).attr("height",500);
const svg2Margin = {
    top:40,
    bottom:40,
    left:40,
    right:40
}
const width2 = 400-svg2Margin.left-svg2Margin.right;
const height2 = 400-svg2Margin.top-svg2Margin.bottom;

const estimatedWorldWealth = [
    { year: 1800, wealth: 150 },
    { year: 1810, wealth: 200 },
    { year: 1820, wealth: 250 },
    { year: 1830, wealth: 300 },
    { year: 1840, wealth: 350 },
    { year: 1850, wealth: 400 },
    { year: 1860, wealth: 500 },
    { year: 1870, wealth: 600 },
    { year: 1880, wealth: 700 },
    { year: 1890, wealth: 800 },
    { year: 1900, wealth: 1000 },
    { year: 1910, wealth: 1500 },
    { year: 1920, wealth: 2000 },
    { year: 1930, wealth: 3000 },
    { year: 1940, wealth: 4000 },
    { year: 1950, wealth: 5000 },
    { year: 1960, wealth: 10000 },
    { year: 1970, wealth: 15000 },
    { year: 1980, wealth: 25000 },
    { year: 1990, wealth: 35000 },
    { year: 2000, wealth: 50000 },
    { year: 2010, wealth: 75000 },
    { year: 2020, wealth: 100000 },
    { year: 2030, wealth: 120000 }
    // Add more entries for future years as needed
  ];
  
const xAxis2 = d3.scaleLinear().domain([d3.min(estimatedWorldWealth, d => d.year),d3.max(estimatedWorldWealth,d=>d.year)]).range([0,width]);
const yAxis2 = d3.scaleLinear().domain([d3.min(estimatedWorldWealth,d=>d.wealth),d3.max(estimatedWorldWealth,d=>d.wealth)]).range([height,0]);


const svgGroup2 = svg2.append("g").attr("transform",`translate(${svg2Margin.right},${svg2Margin.top})`);
svgGroup2.append("g").attr("transform",`translate(0,${height2})`).call(d3.axisBottom(xAxis2).ticks(8).tickFormat(d3.format("d")));
svgGroup2.append("g").call(d3.axisLeft(yAxis2).tickFormat(d3.format("$,.0f")));


svgGroup2.selectAll("rect")
.data(estimatedWorldWealth).enter().append('rect')
.attr("x",(d,i)=> xAxis2(d.year))
.attr("y",(d,i)=> yAxis2(d.wealth))
.attr("width",d=>width/estimatedWorldWealth.length)
.attr("height",(d,i)=>height-yAxis2(d.wealth))








const apiKey = 'AIzaSyDvpHV9g0JV6T9F6TXNcLpM6fHJig-JltQ'; // Replace with your actual API key

async function getVideos(searchTerm) {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// Example usage
getVideos('sawan aya hai')
  .then(data => {
    // Process the video data (e.g., display thumbnails and titles)
    const videoList = document.getElementById('video-list');
    data.items.forEach(item => {
      const videoId = item.id.videoId;
      const title = item.snippet.title;
      const thumbnail = item.snippet.thumbnails.default.url;

      // Create an element for each video
      const videoItem = document.createElement('li');
      videoItem.innerHTML = `
        <a href="https://www.youtube.com/watch?v=${videoId}">
          <img src="${thumbnail}" alt="${title}">
          ${title}
        </a>
      `;
      videoList.appendChild(videoItem);
    });
  })
  .catch(error => {
    console.error(error);
  });