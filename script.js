const app = new Vue({
    el: "#app",
    data: {
        usersList: globalUsersList,
        //index:0,
        userActive: globalUsersList[0],
        searchText: "",
        newMessage: "",
    },
    methods:{
        getAvatarPath(userAvatar){
            return `img/avatar${userAvatar}.jpg`
        },
        changeActiveUser(indice){
            //console.log(indice,this);
            this.userActive = this.usersList[indice]
        },
        formatTime(stringDate){
            return moment(stringDate, "DD/MM/YYYY HH:mm:ss").format("HH:mm")
        },
        sendMessage(){

            if(this.newMessage.trim().length != 0){

                let newMessageObject = {
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    text: this.newMessage,
                    status: 'sent'
                };

                let currentchat = this.globalUsersList[this.userActive].text
                currentchat.push(newMessageObject);
                this.newMessage="";

            }
        }


        
    }
})