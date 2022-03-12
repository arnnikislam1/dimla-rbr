function classNine() {
  // input starts here //
  let rollNumber = parseInt(prompt("Enter your Roll Number : "));
  let password = prompt('Enter password : ');
  // input ends here //

  if (rollNumber == 8 && password == "Rbrdimla") {
    document.getElementById("card").style.display = "block";
  } else if (rollNumber == 2 && password == "Rbrdimla") {
    document.getElementById("card").style.display = "block";
    document.getElementById("shortName").innerHTML = "Liyakat Islam";
    document.getElementById("name").innerHTML = "Name : Md Liyakat Islam Liyat";
    document.getElementById("rollNumber").innerHTML = "Roll Number : 02";
    document.getElementById("fatherName").innerHTML = "Father Name : Md Atikul Islam";
    document.getElementById("motherName").innerHTML = "Mother Name : Mst Laila Begum";
    document.getElementById("phoneNumber").innerHTML = "Phone Number : 01734081485";
  } else if (rollNumber == 3 && password == "Rbrdimla") {
    document.getElementById("card").style.display = "block";
    document.getElementById("shortName").innerHTML = "Rahat Islam";
    document.getElementById("name").innerHTML = "Name : Md Abdulla All Rahat";
    document.getElementById("rollNumber").innerHTML = "Roll Number : 03";
    document.getElementById("fatherName").innerHTML = "Father Name : Updating...";
    document.getElementById("motherName").innerHTML = "Mother Name : Updating...";
    document.getElementById("phoneNumber").innerHTML = "Phone Number : 01700000000";
  } else if (rollNumber == 4 && password == "Rbrdimla") {
    document.getElementById("card").style.display = "block";
    document.getElementById("shortName").innerHTML = "Matin Alif";
    document.getElementById("name").innerHTML = "Name : Md Abdul Matin Alif";
    document.getElementById("rollNumber").innerHTML = "Roll Number : 04";
    document.getElementById("fatherName").innerHTML = "Father Name : Updating...";
    document.getElementById("motherName").innerHTML = "Mother Name : Updating...";
    document.getElementById("phoneNumber").innerHTML = "Phone Number : 01700000000";
  } else if (rollNumber == 11 && password == "Rbrdimla") {
    document.getElementById("card").style.display = "block";
    document.getElementById("shortName").innerHTML = "Abid Ferdous";
    document.getElementById("name").innerHTML = "Name : Md Abid Ferdous";
    document.getElementById("rollNumber").innerHTML = "Roll Number : 11";
    document.getElementById("fatherName").innerHTML = "Father Name : Updating...";
    document.getElementById("motherName").innerHTML = "Mother Name : Updating...";
    document.getElementById("phoneNumber").innerHTML = "Phone Number : 01700000000";
  } else {
    alert("password or roll number is wrong.");
  }
}