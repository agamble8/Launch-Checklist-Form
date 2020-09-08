// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/


function init () {
   let form = document.getElementById("launchForm");
   let statusCheck = document.getElementById("launchStatusCheck");
   let pilotName = document.querySelector("#pilotName");
   let copilotName = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoMass = document.querySelector("input[name=cargoMass]");
   let pilotStatus = document.querySelector("#pilotStatus");
   let copilotStatus = document.querySelector("#copilotStatus");
   let faultyItems = document.querySelector("#faultyItems");
   let pilotNameNew = '';
   let copilotNameNew = '';
   let fuelLevelNew = 0;
   let cargoMassNew = 0;

   form.addEventListener("submit", function(event) {
      `` // Decided not to require ONLY letters because valid names can still include punctuatio
         // such as - . accent etc.
      if (pilotName.value === '' || !isNaN(pilotName.value)) {
         alert("Pilot name must be entered as a string!");
         event.preventDefault();
      };
      pilotNameNew = pilotName.value;
      if (copilotName.value === '' || !isNaN(pilotName.value)) {
         alert("Co-pilot name must be entered as a string!");
         event.preventDefault();
      };
      if (fuelLevel.value === '' || isNaN(fuelLevel.value)) {
         alert("Fuel level must be entered as an integer!");
         event.preventDefault();
      };
      if (cargoMass.value === '' || isNaN(cargoMass.value)) {
         alert("Cargo mass must be entered as an integer!");
         event.preventDefault();
      };   
      pilotNameNew = pilotName.value;
      copilotNameNew = copilotName.value;
      cargoMassNew = cargoMass.value;
      fuelLevelNew = fuelLevel.value;
   });

   pilotStatus.innerHTML += `Pilot ${pilotNameNew} Ready`
   console.log(pilotStatus.innerHTML);
   // console.log(pilotNameNew);
   // console.log(copilotNameNew);
   // console.log(cargoMassNew);
};

window.onload = init;