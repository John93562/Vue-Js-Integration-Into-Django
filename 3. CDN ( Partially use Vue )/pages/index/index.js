let vm = Vue.createApp({
    data() {
        return {
            postsAreVisible: true,
            posts: [{
                    title: "Cats are awesome",
                    description: "There are many reasons why cats are awesome! Here are a few: Independent nature: Cats are ...",
                    imageSource: "https://static01.nyt.com/images/2022/11/29/science/00tb-cats1/00tb-cats1-mediumSquareAt3X.jpg"
                },
                {
                    title: "Authentication",
                    description: "Authentication is a crucial aspect of security in the digital world. It is the process of verifying the identity of a user or system before allowing access to sensitive data or resources. Authentication helps to protect...",
                    imageSource: "https://securityintelligence.com/wp-content/uploads/2018/10/si-advanced-authentication-feature.jpg"
                },
            ]
        }
    }


}).mount('#app')