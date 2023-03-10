function loveCalculator() {
  const name = document.getElementById("name");
  const nameValue = name.value;
  const partnerName = document.getElementById("partner-name");

  const partnerValue = partnerName.value;

  if (nameValue === "" || partnerValue === "") {
//    const errorName = document.getElementById('error-text').innerText = `Please inter your name and your partner name.`
    alert("Please inter your name and your partner name.");
  } else {
    var lovedata = Math.random() * 100;
    lovedata = Math.floor(lovedata);
    document.getElementById("lovevalue").innerText = `Your Love is : ${lovedata + "%"} `;
  }
}
