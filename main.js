// URL SHORT
function urlGet() {
  let url = document.getElementById("url-short").value;
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  function generateString(length) {
    let result = " ";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }
  var random = generateString(7);

  const para = document.createElement("p");
  const node = document.createTextNode(`https://bit.ly/${random}`);
  para.appendChild(node);

  const element = document.getElementById("shortner");
  element.appendChild(para);

  localStorage.setItem(url, random);
}

// URL LONGER
function urlSet() {
  let url = document.getElementById("url-long").value;
  const newUrl = localStorage.getItem(url, random);
  console.log(newUrl);
}
