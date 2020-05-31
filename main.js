Vue.component('product',{
    template:`

    <form class="input-form" @submit.prevent="onSubmit">

        <p>
            <label for="number">Number:</label>
            <input id="number" v-model.number="number" placeholder="number">
        </p>


        <p>
            <input type="submit" value="Submit">  
        </p> 
       
        <button v-on:click="onDelete">  Delete
        </button> 
 

    </form>

    <div class="display">
        <div class="segment A" v-if="!A"></div>
        <div class="segment B" v-if="!B"></div>
        <div class="segment C" v-if="!C"></div>
        <div class="segment D" v-if="!D"></div>
        <div class="segment E" v-if="!E"></div>
        <div class="segment F" v-if="!F"></div>
        <div class="segment G" v-if="!G"></div>
      </div>


    <h1>{{number}}</h1>
    <product @number-submitted="updateNumber" @number-delete="deleteNumber"></product>
    

    `,
    data (){
        return {
            number : null,
            hexs : ['0x7E','0x30','0x6D','0x79','0x33','0x5B','0x5F','0x70','0x7F','0x7B'],
        }
       
    },
    methods :{
        onSubmit(){

            let number = this.number
            h = this.hexs[number];
            arr = ("00000000" + (parseInt(h, 16)).toString(2)).substr(-8);
            this.$emit('number-submitted',number,arr);
            this.number = null;
            
        },
        onDelete()
        {
            this.$emit('number-delete');
            
        }

        
    }
});


var app = new Vue({
    el : '#app',
    data:{
        number:0,
        A : true,
        B : true,
        C : true,
        D : true,
        E : true,
        F : true,
        G : true,

    },
    methods:{
        updateNumber(Number,arr) {
            this.number = Number;
            for (i =1 ;i<arr.length;i++){
                if(arr[i]==1)
                {
                    if(i==1)
                    {
                    this.A = false;
                    }
                    else if(i==2){
                    this.B = false;
                    }
                    else if(i==3){
                    this.C = false;
                    }
                    else if(i==4){
                    this.D = false;
                    }
                    else if(i==5){
                    this.E = false;
                    }
                    else if(i==6){
                    this.F = false;
                    }
                    else if(i==7){
                    this.G = false;
                    }
                    
                    

                }
            }
           
            
        },
        deleteNumber(){
            this.A = true;
            this.B = true;
            this.C = true;
            this.D = true;
            this.E = true;
            this.F = true;
            this.G = true;


        }

            

          }
        

    });