export default class Controller{
    constructor(){
        this.quizzVue = new Vue({ 
            el: '#quizz',
            data: {
                quizz:{
                    question:'',
                    answerList: []
                },
                quizzList:[],
                create: true,
                pass: false,
                passTest: ()=>{
                axios.get('https://localhost:5501/tests/')
                .then((response) =>{
                    this.quizzList = {...response};                    
                });
                this.quizzVue.create = false,
                this.quizzVue.pass = true;  
                },
                onCreate: ()=>{
                    this.quizzVue.quizzList.push({...this.quizzVue.quizz});
                    axios.post('https://localhost:5501/tests/', this.quizzVue.quizz);
                    console.log(this.quizzVue.quizzList);
                }
                
            }
        });
    }

   
}