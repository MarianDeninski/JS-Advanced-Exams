 function addProduct() {

       let here =  $(`#add-product input`);

       if($(here[0]).val() ==='' || $(here[1]).val() ===''){
           return;
       }

    let tr = $(`<tr>`);
    let th1 = $(`<td>${$(here[0]).val()}</td>`);
    let th2 = $(`<td>${$(here[1]).val()}</td>`);
    tr.append(th1);
    tr.append(th2);
$(`#bill`).append(tr);
let op =  +$($(`#bill tfoot tr td`)[1]).text();
op+=+$(here[1]).val();
        $($(`#bill tfoot tr td`)[1]).text(+op.toFixed(2));
        $(here[0]).val(``);
        $(here[1]).val(``);
    }