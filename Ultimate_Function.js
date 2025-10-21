function showInfo(theName = "Unknown", theAge = "Unknown", hourlyRate = 0, show = "Yes", ...skills) {
  document.write(`<div>`);
  document.write(`<h2>Hello, ${theName}</h2>`);
  document.write(`<p>Age: ${theAge}</p>`);
  document.write(`<p>Hourly Rate: $${hourlyRate}</p>`);

  if(show === "Yes") {
    if(skills.length > 0) {
      document.write(`<p>Skills:</p>`);
      document.write(`<p>${skills.join(" | ")}</p>`);
    }else {
      document.write(`<p>Skills: No Skills</p>`);
    }
  }else {
    if(skills.length > 0) {
      document.write(`<p>Skills Hidden</p>`);
    }else {
      document.write(`<p>Skills: No Skills</p>`);
    }
  }
  document.write(`</div>`);
}

showInfo("Amira",23,15,"Yes","HTML","CSS","JavaScript");