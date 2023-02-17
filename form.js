document.getElementById("DOB").addEventListener("click", age)

function age() {
  var userinput = document.getElementById("DOB").value;
  var dob = new Date(userinput);
  var myDate =document.getElementById("DOB");
  myDate.max = new Date().toISOString().split('T')[0];

  var month_diff = Date.now() - dob.getTime();
  var age_dt = new Date(month_diff);
  var year = age_dt.getUTCFullYear();
  var age = Math.abs(year - 1970);

  return (document.getElementById("show").innerHTML = age + "years");

}



function reset() {
  document.getElementById("mainform").reset();

 
}

const getRadioValue1 = () => {
  let radioBtn = document.getElementsByName("gender");
  let selected = Array.from(radioBtn).find((radio) => radio.checked);
  return selected.value;
}


function setRadioValue(a) {
   let ele = document.getElementById(a);
     ele.checked = true;
  }

 
var selected_row = null;


function onformSubmit() {
  if (validate()) {
    //let emptyarr=[];
    
    var data = readData();
   // var result = Object.entries(data);
   // emptyarr.push(result[0]);
   // emptyarr.push(result[1]);
   // console.log(emptyarr);
   // console.log(result);
    if (selected_row == null) {
      insert(data);
      localStorage.setItem("id", JSON.stringify(userdetails));
console.log(userdetails);
reset();
    }
    else {
      update(data);
    }



//for local storage 
 

   
  }
  reset();
}

//const setRadioValue = (gender) => {
  // document.getElementById(gender).checked = true;}

var userdetails = [];
function readData() {
  var data = {};

  data["FullName"] = document.getElementById("fname").value;
  data["LastName"] = document.getElementById("lname").value;
  data["Email"] = document.getElementById("mail").value;
  data["Address"] = document.getElementById("address").value;
  data["Number"] = document.getElementById("num").value;
  data["BirthDate"] = document.getElementById("DOB").value;
  data["Age"] = document.getElementById("show").innerHTML;
  data["Gender"] = getRadioValue1();
  //console.log(data["Gender"]);
  userdetails.push(data)
  return data;

  
}

function insert(data) {
  var table = document.getElementById("list").getElementsByTagName("tbody")[0];
  var row = table.insertRow(table.length);
  var cell1 = row.insertCell(0);
  cell1.innerHTML = data.FullName;

  var cell2 = row.insertCell(1);
  cell2.innerHTML = data.LastName;

  var cell3 = row.insertCell(2);
  cell3.innerHTML = data.Email;

  var cell4 = row.insertCell(3);
  cell4.innerHTML = data.Number;

  var cell5 = row.insertCell(4);
  cell5.innerHTML = data.BirthDate;

  var cell6 = row.insertCell(5);
  cell6.innerHTML = data.Age;

  var cell8 = row.insertCell(6);
  cell8.innerHTML = data.Address;

  var cell7 = row.insertCell(7);
  cell7.innerHTML = data.Gender;
  console.log( cell7.innerHTML );

  var cell9 = row.insertCell(8);
  cell9.innerHTML = `<button onclick="onEdit(this)" data-toggle="modal" data-target="#modalSubscriptionForm">edit</button>`

  var cell10 = row.insertCell(9);
  cell10.innerHTML = `<button onclick="deleteRow(this)">delete</button>`



}

function onEdit(td){


  selected_row = td.parentElement.parentElement;
  document.getElementById("fname").value = selected_row.cells[0].innerHTML;
  document.getElementById("lname").value = selected_row.cells[1].innerHTML;
  document.getElementById("mail").value = selected_row.cells[2].innerHTML;
  document.getElementById("num").value = selected_row.cells[3].innerHTML;
  document.getElementById("DOB").value = selected_row.cells[4].innerHTML;
  document.getElementById("show").value = selected_row.cells[5].innerHTML;
  document.getElementById("address").value = selected_row.cells[6].innerHTML;
  //console.log(selected_row.cells[7].innerHTML);
  //let checkedradio= selected_row.cells[7].innerHTML;
  setRadioValue(selected_row.cells[7].innerHTML);
  console.log((selected_row.cells[7].innerHTML),"gfd");
  
  //document.getElementById("Gender").value = getRadioValue();
}



function update(data) {
  selected_row.cells[0].innerHTML = data.FullName;
  selected_row.cells[1].innerHTML = data.LastName;
  selected_row.cells[2].innerHTML = data.Email;
  selected_row.cells[3].innerHTML = data.Number;
  selected_row.cells[4].innerHTML = data.BirthDate;
  selected_row.cells[5].innerHTML = data.Age;
  selected_row.cells[6].innerHTML = data.Address
  // selected_row.cells[7].innerHTML = getRadioValue1();

 
}

function deleteRow(td) {
  row = td.parentElement.parentElement;
  document.getElementById("list").deleteRow(row.rowIndex);
  reset();
}

function validate() {
  let isValid = true;
  var numbervalid = document.getElementById("num").value;
  var pattern = /^[6-9]\d{9}$/;
  let date = document.getElementById("DOB").value;
  var radios = document.getElementsByName("gender");
  var selectedradios = Array.from(radios);

  var validation = document.querySelectorAll(".was-validated").values;

  if ((numbervalid == "" || !pattern.test(numbervalid)) &&
    (validation == "") &&
    (!(selectedradios[0].checked || selectedradios[1].checked))) {
    isValid = false;
  }
  else if (date == "") {
    isValid = false;


  } else {
    isValid = true;
  }

  return isValid;

}

// function Insert_Data() {
//   var table = document.getElementById("list");
//   table.innerHTML="";
//   var tr="";
//   a.forEach(x=>{
//      tr+='<tr>';
//      tr+='<td>'+x.name+'</td>'+'<td>'+x.age+'</td>'+'<td>'+x.hometown+'</td>'
//      tr+='</tr>'

//   })
//   table.innerHTML+=tr;
//   //Help......  
// }

// function insert(params) {
  
// }

