let x  =60;

while (x>=0){

if (x==50){

console.log ("Orbiter transfers from ground to internal power (T-" + x + " segundos)" );

} else if (x==31){

    console.log ("Ground launch sequencer is go for auto sequence start (T-" + x + " segundos)" );
    
}else if (x==16){

    console.log ("Activate launch pad sound suppression system (T-" + x + " segundos)" );
    
}else if (x==10){

    console.log ("Activate main engine hydrogen burnoff system (T-" + x + " segundos)" );
    
}else if (x==6){

    console.log ("Main engine start (T-" + x + " segundos)" );
    
}else if (x==0){

    console.log ("Solid rocket booster ignition and liftoff! (T-" + x + " segundos)" );
    
}else {
console.log("T-" + x + " segundos");
}

x--;

}