// import { gotScraping } from "got-scraping";
// import * as cheerio from "cheerio";

// const response = await gotScraping.get("https://news.ycombinator.com/");

// const html = response.body;
// const $ = cheerio.load(html);
// const articles = $(".athing");

// for (const article of articles) {
//   const structuredData = {
//     url: $(article).find(".titleline a").attr("href"),
//     rank: $(article).find(".rank").text().replace(".", ""),
//     title: $(article).find(".titleline").text(),
//     author: $(article).find("+tr .hnuser").text(),
//     points: $(article).find("+tr .score").text().replace(" points", ""),
//   };

//   console.log(structuredData);
// }
