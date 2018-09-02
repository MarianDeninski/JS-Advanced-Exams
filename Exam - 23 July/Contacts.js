class Contact{
    constructor(firstName, lastName, phone, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.article = '';
        this.online = false;
    }
    get online(){

        return this._online;
    }
    set online(asd) {
        if (this.article !== '') {
            if (asd !== false) {
                if (!$(this.article.children()[0]).hasClass(`online`)) {
                    $(this.article.children()[0]).addClass(`online`);
                }

            } else {
                    if ($(this.article.children()[0]).hasClass(`online`)) {
                        $(this.article.children()[0]).removeClass(`online`);
                    }

            }
        }

        this._online = asd
    }

    render(id){
        this.article = $(`<article>`);
        let div1 ='';
        if(this.online){
           div1 = $(`<div>`).addClass(`title`).addClass(`online`).text(`${this.firstName} ${this.lastName}`);
        }else {
            div1 = $(`<div>`).addClass(`title`).text(`${this.firstName} ${this.lastName}`);
        }

        let button = $(`<button>&#8505;</button>`).click(function () {
            div2.toggle()
        });

        let div2 = $(`<div class="info">`);
        let span1 = $(`<span>&phone; ${this.phone}</span>`);
        let span2 = $(`<span>&#9993; ${this.email}</span>`);

        div1.append(button);
        div2.append(span1);
        div2.append(span2);
        div2.hide();
       this.article.append(div1);
        this.article.append(div2);

        $(`#${id}`).append(this.article);
    }
}