   function listBuilder(selector) {
        let ul = $(`<ul>`);
        let li = $(`<li>`);

        return {
            createNewList() {

                ul = $(`<ul>`);
                $(selector).append(ul);
            },
            addItem(name) {

                li = $(`<li>`).text(name);
                let button = $(`<button>Up</button>`).click(UpButton);
                let button2 = $(`<button>Down</button>`).click(DownButton);

                li.append(button);
                li.append(button2);
                ul.append(li);

                function UpButton() {

                    let item = $(this).parent();
                   let preve = item.prev();
                    preve.before(item);

                }
                function DownButton() {
                    let item = $(this).parent();
                    let preve = item.next();
                    item.before(preve)
                    
                }
            }
        }
    }