const app = new Vue({
    el: "#app",
    data: {
        
        usersList: globalUsersList,
        userActive: globalUsersList[0],
        searchText: "",
        newMessage: "",
    },
    
    methods: {
        // IMMAGINI DI TUTTI I CONTATTI
        getAvatarPath(userAvatar){
            return `img/avatar${userAvatar}.jpg`
        },
        // INDICE DELL'UTENTE CHE CON CUI CHATTO
        changeActiveUser(indice){
            this.userActive = this.usersList[indice];
        },
        // MANDARE UN MESSAGGIO
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

                // RISPOSTA AL MIO MESSAGGIO
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
        // CERCA UN NOME ALL'INTERNO DEI MIEI CONTATTI
        search() {
            this.usersList.forEach((user) => {
                let contactName = user.name.toLowerCase();
                let searchedName = this.searchText.toLowerCase();
                if(contactName.startsWith(searchedName)) {
                    user.visible = true;
                } else {
                    user.visible = false;
                }
            });
        },
        lastAccess(messagges){

            const lastEnter = messagges[messagges.length - 1];
            const lastDate = this.formatTime(lastEnter.date);

            return lastDate;

        },
        getLastMsgString(messages){
            if(messages.length === 0){
                return "Nessun messaggio disponibile"
            }

            const lastMsg = messages[messages.length - 1];
            const formatDate = this.formatTime(lastMsg.date);

            let trimmedMsg = lastMsg.text.slice(0, 10);

            if(lastMsg.text.length > 20){
                trimmedMsg += "...";
            }

            return trimmedMsg + " - " + formatDate;
        },
        // ORARIO DELLA CHAT
        formatTime(date) {
            return moment(date, "DD/MM/YYYY HH:mm:ss").format('HH:mm');
        }        
    },
})