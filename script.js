let button=document.getElementById("btnHesapla");
button.addEventListener("click", ()=>{
    let sonuc=document.getElementById("sonuc");
    let sayi1=0;
    let sayi2=1;
    let sayiFibonacci;
  
    for(let i=1; i<=144; i++){
      console.log(sayi1);
      sayiFibonacci=sayi1+sayi2;
      sayi1=sayi2;
      sayi2=sayiFibonacci;
      sonuc.innerHTML=sayiFibonacci;
    }
});
