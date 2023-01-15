const precosLivros = [25,15,30,50,45,20];
let maisBarato = Math.max(...precosLivros);
precosLivros.forEach(preco => {if(preco < maisBarato){
 maisBarato = preco 
}});

console.log(maisBarato);
