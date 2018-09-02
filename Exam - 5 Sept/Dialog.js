class Dialog {
    constructor(message, func) {
        this.massage = message;
        this.func = func;
        this.board = '';
        this.obj = {};
        this.input = [];

    }
    addInput(label, name, type) {

        let massive = [];
        massive.push(label);
        massive.push(name);
        massive.push(type);

        this.input.push(massive);

        this.createPage();
    }
    createPage() {

        let div = $(`<div class="overlay"></div>`);
        let div1 = $(`<div class="dialog"></div>`);
        let p = $(`<p>${this.massage}</p>`);
        let button = $(`<button>OK</button>`).click(this.okBut.bind(this));
        let button1 = $(`<button>Cancel</button>`).click(this.cancel.bind(this));

        if (this.input.length === 0) {
            div1.append(p);
            div1.append(button);
            div1.append(button1);
            div.append(div1);
            this.board = div;
        } else {
            div1.append(p);
            for (let obj of this.input) {
                let labels = $(`<label>${obj[0]}</label>`);
                let input = $(`<input name="${obj[1]}" type="${obj[2]}">`);
                div1.append(labels);
                div1.append(input);
            }

            div1.append(button);
            div1.append(button1);
            div.append(div1);
            this.board =div;
        }
    }
    okBut() {

        if ($(`.overlay`).find(`input`).length !==0) {

            let input = this.board.find(`input`);


            for (let obj of input) {

                this.obj[obj.name] = $(obj).val();
            }

            $($(`.overlay`).first()).remove();
            this.func(this.obj);


        } else {
            $($(`.overlay`).first()).remove();
            this.func();

        }
    }
    cancel() {
        $($(`.overlay`).first()).remove();
    }
    render() {

        if(this.board ===''){
            this.createPage();
        }
        $('body').append(this.board);
    }
}