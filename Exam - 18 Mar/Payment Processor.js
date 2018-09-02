class PaymentProcessor{
    constructor(option){
        this.option = {types: ["service", "product", "other"], precision: 2};

        if(option!==undefined){

            for (let obj in option) {

                if(Object.keys(this.option).includes(obj)){

                    this.option[obj] = option[obj];
                }
            }
        }
        this.data = new Map();
    }

    registerPayment(id, name, type, value){

        if(!this.option.types.includes(type)){
            throw new Error;
        }
        if(id ===``|| name ===''|| typeof id !==`string`|| typeof name !==`string` || typeof value!==`number`){
            throw new Error;
        }
        if(this.data.has(id)){
            throw new Error;
        }

        let obj = {Name:name,Type:type,Value:value};

        this.data.set(id,obj);
    }

    deletePayment(id){

        if(!this.data.has(id)){
            throw new Error;
        }

        this.data.delete(id);
    }

    get(id){
        if(!this.data.has(id)){
            throw new Error;
        }

        let result = `Details about payment ID: ${id}\n- Name: ${this.data.get(id).Name}\n- Type: ${this.data.get(id).Type}\n- Value: ${this.data.get(id).Value.toFixed(this.option.precision)}`;

        return result;
    }

    setOptions(options){
        for (let obj in options) {

            if(Object.keys(this.option).includes(obj)){

                this.option[obj] = options[obj];
            }
        }

    }
    toString(){

        let sum = 0;
        for (let obj of this.data.values()) {
            sum+=obj.Value;
        }

        return `Summary:\n- Payments: ${this.data.size}\n- Balance: ${sum.toFixed(this.option.precision)}`
    }

}