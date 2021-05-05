const app = new Vue({
    el: "#app",
    data: {
        usersList: globalUsersList,
        index:0,
        userActive: globalUsersList[0]
    },
    methods:{
        getAvatarPath(userAvatar){
            return `img/avatar${userAvatar}.jpg`
        },
        changeActiveUser(indice){
            //console.log(indice,this);
            this.userActive = this.usersList[indice]
        }
    }
})