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


window.addEventListener("load", function() {
   let form = document.getElementById("launchForm");
   let statusCheck = document.getElementById("launchStatusCheck");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let faultyItems = document.getElementById("faultyItems");
   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName");
      let pilotNameNew = pilotName.value;
      let copilotName = document.querySelector("input[name=copilotName]");
      let copilotNameNew = copilotName.value;
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let fuelLevelNew = fuelLevel.value;
      let cargoMass = document.querySelector("input[name=cargoMass]");
      let cargoMassNew = cargoMass.value;

      if (pilotName.value === '' || !isNaN(pilotName.value)) {
         alert("Pilot name must be entered as a string!");
         event.preventDefault();
      };
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
      pilotStatus.innerHTML = `Pilot ${pilotNameNew} Ready`;
      // console.log(pilotStatus.innerHTML);
   });
   console.log(pilotStatus.innerHTML);
   faultyItems.style.visibility = "visible";

});
