 function sort(colIndex, descending) {

        let rows = $(`#products`).find(`tbody`)[0].children;
        console.log(rows);
        console.log($(rows[0].children[0]));

        let sorted = null;

        if(colIndex ===0){

            sorted = (a,b)=>{
                a = $(a.children[0]).text();
                b = $(b.children[0]).text();

               return a.localeCompare(b)
            }
        }else{
            sorted = (a,b)=>{
                a = Number($(a.children[1]).text());
                b = Number($(b.children[1]).text());

                return a-b;
            }
        }
       let arr =  Array.from(rows);
        arr.sort(sorted);

        if(descending){
            arr.reverse()
        }
        arr.forEach(a=>$(a).appendTo($(`#products`).find(`tbody`)))
    }