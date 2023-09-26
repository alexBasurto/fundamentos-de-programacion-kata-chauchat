let cargador = [];
for (let bala = 0; bala < 7; bala++) {
    cargador.push("pium!");
}


function chauchat(municion) {
    let descanso = 0;
    for (let disparo = 0; disparo < 7; disparo) {
        if (descanso == 3 || descanso == 6) {
            console.log(" ");
            descanso++;
            continue;
        } else {
            if (Math.random() < 0.2) {
                console.log(municion[disparo]);
                descanso++
                disparo++;
            } else {
                console.log("Illo, me he quedao pillá!");
                descanso++;
                disparo++;
            }
        }
    }
}



chauchat(cargador);