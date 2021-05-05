const app = new Vue({
    el: "#app",
    data: {
        
        usersList: globalUsersList,
        userActive: globalUsersList[0],
        searchText: "",
        newMessage: "",
    },
    
    methods: {
        getAvatarPath(userAvatar){
            return `img/avatar${userAvatar}.jpg`
        },
        changeActiveUser(indice){
            this.userActive = this.usersList[indice]
        },
        sendMessage(){

            if(this.newMessage.trim().length != 0){

                let newMessageObject = {
                    date: moment().format('DD/MM/YYYY HH:mm:ss'),
                    text: this.newMessage,
                    status: 'sent'
                };

                let currentChat = this.userActive.messages;

                currentChat.push(newMessageObject);

                this.newMessage= "";

                // risposta del messaggiato 
                setTimeout(function() {

                    let pcMesssage = {
                        date: moment().format('DD/MM/YYYY HH:mm:ss'),
                        text: 'sto studiando',
                        status: 'received'
                    };

                    currentChat.push(pcMesssage);

                }, 1000);
            }
            
        },
        search() {
            this.usersList.forEach((user) => {
                let contactName = user.name.toLowerCase();
                let searchedName = this.searchText.toLowerCase();
                if(contactName.includes(searchedName)) {
                    user.visible = true;
                } else {
                    user.visible = false;
                }
            });
        },  
        formatTime(date) {
            return moment(date, "DD/MM/YYYY HH:mm:ss").format('HH:mm');
        }        
    }
})