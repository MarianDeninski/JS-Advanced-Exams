function move(direction) {
       if(direction === -1){
          let town = $(`#towns option:selected`);
          let preve = town.prev();
          town.insertBefore(preve);
       }
        if(direction === +1){
            let town = $(`#towns option:selected`);
            let preve = town.next();

           preve.insertBefore(town);
        }
    }