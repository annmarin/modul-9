// Christmas Tree - half a tree

function drawTree(h) {    
    for (var i = 0 ; i < h ; i++) {
        var star = '';
        for (var j = 0 ; j <= i ; j++) {
            star = star + '*';
        }
        console.log(star);
    }
};

drawTree(5);

/* the whole tree

function drawTree(h) {    
    for ( var i = 0 ; i < h ; i++) {
        var star = '';
        for (j = 0 ; j < h - i ; j++) {
            star = star + ' ';	
        }
        for (var j = 0 ; j <= i * 2 ; j++) {
            star = star + '*';   
        }
        console.log(star);	
    }
};

drawTree(5);

the new whole tree

function drawTree(h) {    
    for ( var i = 0 ; i < h ; i++) {
        var star = '';
        for (j = 0 ; j <= h + i ; j++) {
            if (j < h - i) {
                star += ' ';
            } else { star += '*';
            }   
        }        
        console.log(star);  
    }
};

drawTree(10);
*/