function JSONGenerator() {
  const current = window.location.pathname;
  let obj = {};

  // creating route url as a key given value obj
  obj[current] = {};
  const file = document.getElementById("css");
  //console.log(file);

  const content = Array.prototype.map
    .call(file.sheet.cssRules, (x) => {
      //console.log(x);
      if (x.style != undefined) {
        //console.log(x.style.backgroundImage);
        if (x.style.backgroundImage !== "") {
          if (x.style.backgroundImage.match(/url/g)) {
            console.log(x.style.backgroundImage);
            console.log(JSON.stringify(x.style.backgroundImage));
            console.log(x);

            key = x.selectorText.toString();

            //checking for multiple tags and adding bg is ',' exists
            if (key.indexOf(",") === -1) {
              obj[current][key] = x.style.backgroundImage;
              //console.log(obj);
            } else {
              for (let i = 0; i < key.length; i++) {
                if (key[i] == ",") {
                  // requiredd tag which were spearated by ,
                  key1 = key.slice(0, i);
                  obj[current][key1] = x.style.backgroundImage;
                  // skipping the blank spaces btw the tag and ,
                  key = key.slice(i + 2, key.length);
                  i = 0;
                  //console.log(obj);
                }
              }
            }
            //enable the code below to change the url in css file so it doesn't load directly
            //   x.style.backgroundImage =
            //     url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='32' viewBox='0 0 24 32' preserveAspectRatio='none'%3E%3Cstyle%3Eline %7B stroke-width: 2px%3B stroke: %23ffffff%3B %7D%3C/style%3E%3Cline x1='0' y1='11' x2='24' y2='11' /%3E%3Cline x1='0' y1='21' x2='24' y2='21' /%3E%3Cline x1='0' y1='16' x2='24' y2='16' /%3E%3C/svg%3E");

            //console.log(obj);
          }
        }
      }
    })
    .join("\n");

  // myobj[current] = obj;
  // console.log(myobj);
  console.log(obj);
  let myjson = JSON.stringify(obj, "\n");
  console.log(myjson);
}

JSONGenerator();
