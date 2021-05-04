const app = new Vue({
    el: "#app",
    data: {
        usersList: globalUsersList,
    },
    methods:{
        getAvatarPath(userAvatar){
            return `img/avatar${userAvatar}.jpg`
        }
    }
})