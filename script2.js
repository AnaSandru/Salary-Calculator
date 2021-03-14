var brut = document.querySelector('.brut');
var cas = document.querySelector('.cas');
var cass = document.querySelector('.cass');
var imp = document.querySelector('.impozit');
var net = document.querySelector('.net');
var tbody = document.querySelector('.tbody');
var salariu = document.querySelector('#modificareSalariu');

var angajati=document.getElementById('mySelect');
var a = [ ];
function myFunction(){
axios.get('http://localhost:3000/api/employee')
.then(function(response) {
      a=response.data.data;
    //console.log(a);
  a.forEach( element => { 
      //console.log(a.name.value);

    angajati.innerHTML += `<option value="${element._id}">${element.name}</option>`;
    

   })
   
  })
.catch(function (error) {
  // handle error
  console.log(error);
});
}
myFunction();
function calculate(){
  var x=document.getElementById("mySelect").value;
  //console.log(x);
   var selectedEmployee = a.find(element => {
      if(element._id === x) return true;})
  //console.log(selectedEmployee.salary);

  brut.innerHTML=selectedEmployee.salary;
  cas.innerHTML = Math.round(0.25*selectedEmployee.salary);
  cass.innerHTML= Math.round(0.1*selectedEmployee.salary);
  imp.innerHTML= 0;
  net.innerHTML=Math.round(brut.innerHTML-cas.innerHTML-cass.innerHTML-imp.innerHTML);

}

function modificare(){
  var salariu = document.getElementById("modif").value;
  var angajatId = document.getElementById("mySelect").value;
  //console.log(angajatId);
  
  var selected = a.find(element => {
    if(element._id === angajatId) return true;})

    console.log(selected);
    console.log(selected.name);
    var employee={
      _id : angajatId,
      companyAge : selected.companyAge,
      name : selected.name,
      salary : salariu,
      position : selected.position,
      team : selected.team,
      phone: selected.phone,
      paysTax : selected.paysTax,
  
      }
      console.log(employee);
    axios.put("http://localhost:3000/api/employee/"  + angajatId, employee)
      .then(function (response) {
      })
      .catch(function (error) {
        console.log(error);
      })
      calculate();
    }

  

 