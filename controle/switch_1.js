let nota = 10;

switch(Math.ceil(nota)){
    case 10: case 9: case 8: case 7:
        console.log("Parabens");
        break;
    case 6:
    case 5:
        console.log("Recupercao");
        break;
    case 4:
    case 3:  
    case 2:  
        console.log("Reprovado"); 
        break;
    case 1:
    case 0:
        console.log("Muito Reprovado");
        break;
    default:
        console.log("Nota invalida");
}

