const postBtn = document.getElementById("postBtn");
const posts = document.getElementById("posts");


postBtn.addEventListener("click",()=>{

    const title =
    document.getElementById("title").value;

    const content =
    document.getElementById("content").value;


    const post = document.createElement("div");

    post.className="post";

    post.innerHTML=`
        <h3>${title}</h3>
        <p>${content}</p>
        <button onclick="deletePost(this)">
        Delete
        </button>
    `;


    posts.appendChild(post);

});


function deletePost(button){

    button.parentElement.remove();

}