function pitagoras() {
  var hipo =  Number(document.getElementById("hipotenusa").value)
  var cat1 =  Number(document.getElementById("cateto1").value)    
  var cat2 =  Number(document.getElementById("cateto2").value)

  if(cat1**2 + cat2**2 == hipo**2){

    document.getElementById("saida").innerHTML = "true"

  }else{
      document.getElementById("saida").innerHTML = "false"
  }

}
