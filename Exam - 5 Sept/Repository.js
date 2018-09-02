class Repository{
    constructor(props){
        this.props = props;
        this.data = new Map();

       this.id = (function () {
            let id = 0;
           return function () {
               return id++;
            }
        }())
    }

    add(entity){
        for (let key in this.props) {

            if(!(Object.keys(entity)).includes(key)){
                throw TypeError(`Property ${key} is missing from the entity!`)
            }
            if(typeof entity[key] !== this.props[key]){
                throw TypeError(`"Property ${entity[key]} is of incorrect type!`)
            }
        }
        let num = this.id();

        this.data.set(num,entity);

        return num;


    }
    get(id){
        if (this.data.has(id)) {
            return this.data.get(id);
        } else {
            throw new Error;
        }
        
    }
    update(id, entity){
        if (this.data.has(id)) {
            for (let key in this.props) {

                if(!(Object.keys(entity)).includes(key)){
                    throw TypeError(`Property ${key} is missing from the entity!`)
                }
                if(typeof entity[key] !== this.props[key]){
                    throw TypeError(`"Property ${entity[key]} is of incorrect type!`)
                }
            }

            this.data.set(id, entity);
        } else {
            throw new Error(`Entity with id: ${id} does not exist!`);
        }
    }
    del(id){
        if (this.data.has(id)) {
            this.data.delete(id);
        } else {
            throw new Error(`"Entity with id: ${id} does not exist!`);
        }
    }
    get count(){
        return this.data.size;
    }
}