class PaymentManager{
    constructor(title){
        this.title = title;
    }
    createPayment(name,category,price){

        let tr = $(`<tr>`);
        let td1 = $(`<td>${name}</td>`);
        let td2 = $(`<td>${category}</td>`);
        let td3 = $(`<td>${price}</td>`);
        let td4 = $(`<td></td>`);
        let button = $(`<button>Delete</button>`).click(function () {

            $(this).parent().parent().delete();

        });
        td4.append(button);
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);

        return tr;
    }
    createPage(title){

        let table = $(`<table>`);
        let caption = $(`<caption>${this.title} Payment Manager</caption>`);

        let thead = $(`<thead>`);
        let tr = $(`<tr>`);
        let th1 = $(`<th class="name">Name</th>`);
        let th2 = $(`<th class="category">Category</th>`);
        let th3 = $(`<th class="price">Price</th>`);
        let th4 = $(`<th>Actions</th>`);
        tr.append(th1);
        tr.append(th2);
        tr.append(th3);
        tr.append(th4);
        thead.append(tr);

        let tBody = $(`<tbody class="payments">`);

        let tfoot = $(`<tfoot class="input-data">`);
        let tr1 = $(`<tr>`);
        let td = $(`<td>`);
        let input = $(`<input name="name" type="text">`);
        td.append(input);
        let td1 = $(`<td>`);
        let input1 = $(`<input name="category" type="text">`);
        td1.append(input1);
        let td2 = $(`<td>`);
        let input2 = $(`<input name="price" type="number">`);
        td2.append(input2);
        let td3 = $(`<td>`);
        let button = $(`<button>Add</button>`).click(this.Add);
        td3.append(button);
        tr1.append(td);
        tr1.append(td1);
        tr1.append(td2);
        tr1.append(td3);
        tfoot.append(tr1);

        table.append(caption);
        table.append(thead);
        table.append(tBody);
        table.append(tfoot);

        return table;
    }
    Add(){
      let tbody =  $($(this).parent().parent().parent().parent()).find(`tbody`);
      let tfoot =  $($(this).parent().parent()).find(`input`);

      let inputs = [];
        for (let obj of tfoot) {

           inputs.push($(obj).val());

            if($(obj).val().length ===0){
               return;
            }

        }

        let tr = $(`<tr>`);
        let td1 = $(`<td>${inputs[0]}</td>`);
        let td2 = $(`<td>${inputs[1]}</td>`);
        let td3 = $(`<td>${Number(inputs[2])}</td>`);
        let td4 = $(`<td></td>`);
        let button = $(`<button>Delete</button>`).click(function () {

            $(this).parent().parent().remove();
        });
        td4.append(button);
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);

        tbody.append(tr);

        for (let obj of tfoot) {

            $(obj).val(``);
        }
    }
    render(id){

        let table = this.createPage(this.title);
        $(`#${id}`).append(table);

    }
}