// Strings

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.',
    dinosaur = 'triceratops';

var dinosaurUpperCase = dinosaur.toUpperCase();

var dinosaurReplacement = text.replace('Velociraptor', dinosaurUpperCase);

//console.log(dinosaurReplacement.length/2);

console.log(dinosaurReplacement.slice(0, 72));   

