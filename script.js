(async () => {
  const titleH1 = document.getElementById("title");
  const res = await fetch("/.netlify/functions/getTitle");
  const json = await res.json();
  titleH1.innerHTML = json.title;
})();
