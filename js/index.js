function france() {
  document.getElementById("france").style.display = "flex";
  document.getElementById("germany").style.display = "none";
  document.getElementById("england").style.display = "none";

  document.getElementById("fr").style.color = "White";
  document.getElementById("fr").style.backgroundColor = "#376B44";

  document.getElementById("de").style.color = "Black";
  document.getElementById("de").style.backgroundColor = "#D4E8D9";

  document.getElementById("eng").style.color = "Black";
  document.getElementById("eng").style.backgroundColor = "#D4E8D9";
}

function germany() {
  document.getElementById("france").style.display = "none";
  document.getElementById("england").style.display = "none";
  document.getElementById("germany").style.display = "flex";

  document.getElementById("de").style.color = "White";
  document.getElementById("de").style.backgroundColor = "#376B44";

  document.getElementById("fr").style.color = "Black";
  document.getElementById("fr").style.backgroundColor = "#D4E8D9";

  document.getElementById("eng").style.color = "Black";
  document.getElementById("eng").style.backgroundColor = "#D4E8D9";
}
function england() {
  document.getElementById("eng").style.color = "White";
  document.getElementById("eng").style.backgroundColor = "#376B44";

  document.getElementById("de").style.color = "Black";
  document.getElementById("de").style.backgroundColor = "#D4E8D9";

  document.getElementById("fr").style.color = "Black";
  document.getElementById("fr").style.backgroundColor = "#D4E8D9";

  document.getElementById("france").style.display = "none";
  document.getElementById("germany").style.display = "none";
  document.getElementById("england").style.display = "flex";
}
