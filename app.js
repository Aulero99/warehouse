const packages = [
    {
    priorityLevel: 'express',
    isFragile: false,
    weight: 2,
    to: 'Sir Harrington IV',
    trackingNumber: '1324kjs'
  },
  {
    priorityLevel: 'standard',
    isFragile: true,
    weight: .5,
    to: 'Master Mercutio',
    trackingNumber: '1325sdk'
  },
  {
    priorityLevel: 'free',
    isFragile: true,
    weight: .5,
    to: 'Mistress Ravenfeather',
    trackingNumber: 'jffd147'
  },
  {
    priorityLevel: 'standard',
    isFragile: false,
    weight: 4,
    to: 'B. Robert Brown',
    trackingNumber: 'acdc145'
  },
  {
    priorityLevel: 'express',
    isFragile: true,
    weight: 6,
    to: 'Chancellor Wallace',
    trackingNumber: '4b2l0z'
  },
  {
    priorityLevel: 'standard',
    isFragile: false,
    weight: 5,
    to: 'Sarah Sharm',
    trackingNumber: '8081baz'
  },
  {
    priorityLevel: 'free',
    isFragile: true,
    weight: 12,
    to: 'Tae Lien',
    trackingNumber: 'suz2367'
  }
]
let filteredPackages = packages
let currentFilterStyle = reset

// priorityLevel: 'free, express, standard',
// isFragile: true/false,
// weight: number,
// to: 'name',
// trackingNumber: '0000000' 7 digits with numbers and letters

 function priorityCheck(speed, identifier) {
    filteredPackages = filteredPackages.filter(package => package.priorityLevel == speed)
    currentFilter(identifier)
    drawFilteredPackages()
    return
 }

 function fragileCheck(truefalse, identifier) {
    filteredPackages = filteredPackages.filter(package => package.isFragile == truefalse)
    currentFilter(identifier)
    drawFilteredPackages()
    return
 }

 function weightCheck(packageWeight, identifier) {
    filteredPackages = filteredPackages.filter(package => package.weight >= packageWeight)
    currentFilter(identifier)
    drawFilteredPackages()
    return
 }

 function addressCheck(adressedTo, identifier) {
    filteredPackages = filteredPackages.filter(package => package.to == adressedTo)
    currentFilter(identifier)
    drawFilteredPackages()
    return
 }

 function trackingCheck(tracking, identifier) {
    filteredPackages = filteredPackages.filter(package => package.trackingNumber == tracking)
    currentFilter(identifier)
    drawFilteredPackages()
    return
 }

 function resetPackages () {
    filteredPackages = packages
    currentFilter('notIdent')
    drawFilteredPackages()
 }

function currentFilter(identifier){
    currentFilterStyle.classList = ''
    if (identifier == 'notIdent'){return}
    identifier.classList = 'current'
    currentFilterStyle = identifier
}

 function drawFilteredPackages() {
    document.getElementById('board').innerHTML = ''

        for (let i = 0; i<filteredPackages.length; i++){
                let fragileHTML = ''
            if(filteredPackages[i].isFragile == true){
                fragileHTML = 'fragile'
            }else{
                fragileHTML = ''
            }
            document.getElementById('board').innerHTML +=
            '<div id="' + filteredPackages[i].trackingNumber.toString()
            + '" class="package-container col-6 p-4">' + 
                '<div class="package-label">' +
                    '<div class="address">' + 
                    '<p>TO: ' + filteredPackages[i].to.toString() + '</p>' + 
                    '<p>ID: ' + filteredPackages[i].trackingNumber.toString() + '</p>' + 
                    '</div>' + 
                    '<div class="barcode ' + 
                    fragileHTML + 
                '"></div>' +
            '</div>'
        }

    filteredPackages = packages
 }

 drawFilteredPackages()
