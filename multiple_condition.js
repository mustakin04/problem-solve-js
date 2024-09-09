const price = 1000;
if(price>=3000){
    // 10% discount
    let discount=price*10/100;
    let payAmaount= price -discount;
    console.log(payAmaount);
}
else if(price>=2000){
    // 5* discount
    let discount=price*5/100;
    let payAmaount=price -discount;
    console.log(payAmaount)
}
else{
    console.log("Basai jaw moinar ma")
}