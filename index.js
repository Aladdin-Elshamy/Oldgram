const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
];
const mainContent = document.querySelector("main .container");
const post = document.querySelectorAll("section");
const names = document.querySelectorAll(".name");
const locations = document.querySelectorAll(".location");
const like = document.querySelectorAll(".like");
const usernames = document.querySelectorAll(".usernames");
for(let i = 0 ; i < 3 ; i++){
    names[i].textContent = posts[i].name;
    locations[i].textContent = posts[i].location;
    like[i].textContent = `${posts[i].likes} likes`;
    usernames[i].textContent = posts[i].username;
    usernames[i].style.cssText = "font-weight:700";
    usernames[i].after(` ${posts[i].comment}`) 
    
}






