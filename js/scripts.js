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

// To zadanie mnie zrujnowało, nie wiem gdzie sie zahaczyć.
/*
Wykonujac to w kolejnosci jak polecenia:
1) deklaracja funkcji z 1 parametrem - pierwsza linijka skryptu
function drawTree(treeHeight) {
2) deklaracja petli for (ktora ma 3 skladowe)
 for (var i = 0; i < treeHeight; i++) {
3) deklaracja zmiennej star (ktora ma byc pustym stringiem) - var star = '';
4/5) deklaracja wewnetrznego for'a ktory jest zalezny od "i" z petli wyzej - 
        for (var j = 0; j <= i; j++) {
6) wewnatrz nadpisujesz zmienna star (ale nie deklarujesz jej na nowo bo tak nie mozna) - star += '*';  
7) poza wewnetrzna petla zostaje Twoj console.log(star);
8) gdzies pod spodem napisz sobie "drawTree(5);" */