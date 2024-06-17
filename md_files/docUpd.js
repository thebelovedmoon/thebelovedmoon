function docMod() {

  var editedDate, mm, dd, yy;

  editedDate = new Date(document.lastModified);
  dd = editedDate.getDate();
  yy = editedDate.getFullYear();

  switch(editedDate.getMonth()) {
    case 0:
      mm = "gennaio";
      break;
    case 1:
      mm = "febbraio";
      break;
    case 2:
      mm = "marzo";
      break;
    case 3:
      mm = "aprile";
      break;
    case 4:
      mm = "maggio";
      break;
    case 5:
      mm = "giugno";
      break;
    case 6:
      mm = "luglio";
      break;
    case 7:
      mm = "agosto";
      break;
    case 8:
      mm = "settembre";
      break;
    case 9:
      mm = "ottobre";
      break;
    case 10:
      mm = "novembre";
      break;
    case 11:
      mm = "dicembre";
      break;
  }

  var modDoc = dd + " " + mm + " " + yy;
  document.getElementById("docMod").innerHTML = modDoc;
  
}