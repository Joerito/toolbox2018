new Vue({
    el: '#app',
    data: {
        playerhealth:100,
        monsterhealth:100,
        gameisrunning:false,
        bot_timer:null,
        special:false,
        healr:true,
        combo:null,
        turns:[]
    },
    methods: {

        startgame: function(){
            this.gameisrunning = true;
            this.playerhealth = 100;
            this.monsterhealth = 100;
            this.start_bot();
        },

        calculatedamage: function(minimo,maximo){
            return Math.max(Math.floor(Math.random()*maximo)+1,minimo);
        },

        attack_f: function(who,special){
            //'who==0'==attack_player or 'who==1'==attack_bot
            if(who==0){
                if(special == 0){
                    var damage = this.calculatedamage(3,10);
                    this.playerhealth-=damage;
                    this.turns.push({isplayer:false,text:'Player hits Monster for ' + damage});
                }else if(special == 1){
                    var damage = this.calculatedamage(25,30);
                    this.playerhealth-=damage;
                    this.turns.push({isplayer:false,text:'Player hits Monster for ' + damage});
                }
            }else if(who==1){
                if(special == 0){
                    var damage = this.calculatedamage(3,10);
                    this.monsterhealth-=damage;
                    this.turns.push({isplayer:true,text:'Player hits Monster for ' + damage});
                }else if(special == 1){
                    var damage = this.calculatedamage(25,30);
                    this.monsterhealth-=damage;
                    this.turns.push({isplayer:true,text:'Player hits Monster for ' + damage});
                }
            }else{
                console.log('who / 1 or 0');
            }

            if(this.playerhealth <= 0){
                alert("YOU DIED");
                this.stop_bot();
                this.gameisrunning = false;
                this.playerhealth = 100;
                this.monsterhealth = 100;
                this.turns=[];
            }else if(this.monsterhealth <= 0){
                alert("Victory");
                this.stop_bot();
                this.gameisrunning = false;
                this.playerhealth = 100;
                this.monsterhealth = 100;
                this.turns=[];
            }
        },

        attack: function(){
            if(this.gameisrunning==true){
                this.attack_f(1,0);
                this.combo+=1;
                if(this.combo > 4){
                    this.special=true;
                }
            }else{
                alert("Game is NOT RUNNING\n\ngameisrunning: "+this.gameisrunning);
            }
        },

        specialattack: function(){
            if(this.special == true){
                this.attack_f(1,1);
                this.combo=0;
                this.special=false;
            }
        },

        heal: function(){
            if(this.gameisrunning==true){
                if(this.healr == true){
                    this.playerhealth+=25;
                    this.healr=false;
                    setTimeout(() => {
                        this.healr=true;
                    }, 7500);
                }
            }else{
                alert("Game is NOT RUNNING\n\ngameisrunning: "+this.gameisrunning);
            }
        },

        giveup: function(){
            if(this.gameisrunning == true){
                this.stop_bot();
                this.gameisrunning = false;
                this.playerhealth = 100;
                this.monsterhealth = 100;
                this.turns=[];
            }else{
                alert("Game is NOT RUNNING\n\ngameisrunning: "+this.gameisrunning);
            }
        },

        start_bot: function(){
            this.bot_timer = setInterval(() => {
                this.attack_f(0,0);
            }, 1000);
        },

        stop_bot: function(){
            console.log('NOT');
            clearInterval(this.bot_timer);
        }

    }
});
