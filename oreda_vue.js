new Vue({
    el: "#app",
    data: {
        odai: "",
        key: "",
        keyIsCorrect: false,
        point: 0,
        time: 90,
        typePerMin: 0.0,
        numberOfType: 0,

    },
    methods: {
        onChangeKey: function(){
            if(this.odai === this.key){
                this.keyIsCorrect = true
                this.point += 30
                this.key = ""
                this.makeOdai()
            }
            this.numberOfType += 1;
            console.log(this.numberOfType);

        },
        makeOdai: function(){
            var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
            var min = 0 ;
            var max = alphabet.length - 1 ;
            var odai = ""
            for (let i = 0; i < 13; i++) {
                var ri = Math.floor( Math.random() * (max + 1 - min) ) + min 
                odai += alphabet[ri]
            } 
            this.odai = odai
        },
        timerStart: function(){
            let timer = setInterval(() => {
                this.time -= 1
                if (this.time <= 0) {
                    clearInterval(timer)
                    this.calcTypePerMin()
                    this.time = 90
                    this.point = 0

                }
                clearInterval();
            }, 1000);
        },
        calcTypePerMin : function(){
            this.typePerMin = this.numberOfType / 60
        },
        onclickFocus: function () {
            document.getElementById('typingarea').focus()
        },
        checkType: function(){
            
        }
    },
});