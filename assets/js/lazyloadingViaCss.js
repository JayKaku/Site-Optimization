async function fetchBgUrlJSON() {
  path = "https://jaykaku.github.io/Site-Optimaztion/assets/js/data.json";

  let res = await fetch(`${path}`);
  let data = await res.json();
  return data;
}

fetchBgUrlJSON().then((data) => {
  lazyloadin(data);
});

function lazyloadin(data) {
  //console.log(data);
  const current = window.location.pathname;
  console.log(data[current]);
  //console.log(Object.values(data[current]));

  const lazyload = (target, url) => {
    console.log(target, url);
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.style.backgroundImage = url; //"url('../../images/banner.jpg')";

          observer.disconnect();
        }
      });
    });

    io.observe(target);
  };

  for (values in data[current]) {
    let targets = document.querySelectorAll(values);
    // to check if the target array has elements
    // ie element are present in the DOM
    if (targets.length > 0) {
      targets.forEach((target) => {
        lazyload(target, data[current][values]);
      });
    }

    //console.log(data[current][values]);
  }
}
