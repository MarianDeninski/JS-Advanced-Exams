class Player{
    constructor(nickname){
        this.nickname = nickname;
        this.scoore = [];
    }
     addScore(number){
        if(!isNaN(number) && number!==null){
            this.scoore.push(+number);

        }
        return this
    }
    get scoreCount(){

        return this.scoore.length;
    }
    get highestScore(){
        if(this.scoore.length===0){
            return;
        }
        return Math.max(...this.scoore);
    }
    get topFiveScore(){
       return this.scoore.sort((a,b)=>b-a).slice(0,5);
    }
    toString(){
            return `${this.nickname}: [${(this.scoore.sort((a,b)=>b-a)).join(`,`)}]`
    }
}