const app = new Vue({
    el: "#app",
    data: {
        usersList: globalUsersList,
        userActive: globalUsersList[0],
        searchText: "",
        newMessage: "",
    },
    methods:{
        getAvatarPath(userAvatar){
            return `img/avatar${userAvatar}.jpg`
        },
        changeActiveUser(indice){
            this.userActive = this.usersList[indice]
        },
       /* formatTime(stringDate){
            return moment(stringDate, "DD/MM/YYYY HH:mm:ss").format("HH:mm")
        },*/
        sendMessage(){

            if(this.newMessage.trim().length != 0){

                let newMessageObject = {
                    date: moment('13/08/2020 15:30:55').format('DD/MM/YYYY HH:mm:ss'),
                    text: this.newMessage,
                    status: 'sent'
                };

                let currentchat = this.globalUsersList[this.userActive].text
                currentchat.push(newMessageObject);
                this.newMessage= "";

            }
        }


        
    }
})