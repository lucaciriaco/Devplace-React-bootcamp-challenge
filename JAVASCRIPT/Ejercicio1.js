<script>

var palabra = prompt();

encontrarMayusculas(palabra);

function encontrarMayusculas(palabra)
{
    const mayus = "QWERTYUIOPASDFGHJKLZXCVBNM";
    let cantMayus = 0;
    for(let i = 0 ; palabra.lenght <= i; i++)
    {
        for(let j = 0; mayus.length <= j; j++)
        {
            if(palabra[i]==mayus[i])
            {
                cantMayus+=1;
            }
        }
    }
    console.log("La cantidad de mayusculas del string es:  " + cantMayus);
}

</script>