window.name = 'merve';
const person = {
    name: 'meryem',
    full:function(){
        console.log(this); //1
        console.log(this.name); //2

        setTimeout(function(){
            console.log(this); //3
            console.log(this.name); //4
        },2000)
    }
}

------------------------

window.name = 'merve'
const person = {
    name ='meryem',
    fullName:() => {
        console.log(this); //5
        console.log(this.name); //6

        setTimeout(() => {
            console.log(this); //7
            console.log(this.name) //8
        },2000)
    }
}

---------------------
window.name = 'merve';
const person = {
    name: 'meryem',
    full:function(){
        console.log(this); //9
        console.log(this.name); //10
        
         setTimeout(() => {
            console.log(this); //11
            console.log(this.name) //12
        },2000)
    }
}



