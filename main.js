// URL SHORT
var copy = document.getElementById("copy").addEventListener("click", copyText);
function copyText() {
  var link = document.getElementById("link").innerHTML;
  var textArea = document.createElement("textArea");
  textArea.value = link;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  textArea.remove();
}
function urlGet() {
  var url = document.getElementById("url-short").value;
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  function generateString(length) {
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }
  var random = generateString(7);

  const para = document.createElement("p");
  para.id = "link";
  const node = document.createTextNode(`https://bit.ly/${random}`);
  para.appendChild(node);

  const element = document.getElementById("shortner");
  element.appendChild(para);

  const searchElement = {
    long: url,
    short: `https://bit.ly/${random}`,
  };
  window.localStorage.setItem("search", JSON.stringify(searchElement));
}

// URL LONGER
function urlSet() {
  let url = document.getElementById("url-long").value;
  let newUrl = JSON.parse(window.localStorage.getItem(`search`));
  console.log(newUrl);

  if (url === newUrl.short) {
    const para = document.createElement("p");
    const node = document.createTextNode(`${newUrl.long}`);
    para.appendChild(node);

    const element = document.getElementById("longer");
    element.appendChild(para);
    console.log("Match");
  }
}
