 function move(command) {
        if(command === `right`) {
            let city = $(`#available-towns option:selected`);

            $(`#selected-towns`).append(city);
        }
        else if(command === `left`){
             let city = $(`#selected-towns option:selected`);
             $(`#available-towns`).append(city);
         }
        else if(command === `print`){
             let towns = $(`#selected-towns option`);

             let massive = [];
             for (let obj of towns) {

                massive.push(obj.text);

             }
             $(`#output`).text(massive.join(`; `))

             }
    }