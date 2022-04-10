let residentButton = document.getElementById('getresidents')
console.log(residentButton)

let showResidents = function() {
    axios.get(`https://swapi.dev/api/planets/2`)
    .then(function(res){
      let residentsURLS = res.data.residents
          residentsURLS.forEach(elementURL => {
            axios.get(`${elementURL}`)
            .then(function(res){ 
                let personsName = res.data.name
                let ptag = document.createElement('p1')
                ptag.innerHTML = `<br>${personsName}`;
                document.body.appendChild(ptag);

            }
            )
            
        
        })

      }
    )
}

residentButton.addEventListener('click', showResidents)