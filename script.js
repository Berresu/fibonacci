let number=parseInt(prompt());
let sayi1=0;
let sayi2=1;
let sonrakiSayi;
let button=document.getElementById("btnFibonacci");
let sonuc=document.getElementById("sonuc");

button.addEventListener("click", ()=>{
    for(let i=1; i<=number; i++){
        console.log(sayi1);
        sonrakiSayi=sayi1+sayi2;
        sayi1=sayi2;
        sayi2=sonrakiSayi;
        sonuc.innerHTML=sonrakiSayi;
    }
});
