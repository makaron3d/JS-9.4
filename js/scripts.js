function drawTree(treeHeight) {
    for (var i = 0; i < treeHeight; i++) {
        var star = ''; 
        for (var j = 0; j <= i; j++) {
            star += '*';  
        }
        console.log(star);
    }
}
console.log(drawTree(5));
