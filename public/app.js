document.addEventListener("DOMContentLoaded", event=>{
    const app = firebase.app();
    console.log(app);

    const db = firebase.firestore();

    const myPost = db.collection('posts').doc('firstpost');

    myPost.onSnapshot(doc =>{
        const data = doc.data();
        document.querySelector('#title').innerHTML = data.title
    })
});

function updatePost(e){
    const db = firebase.firestore();
    const myPost = db.collection('posts').doc('firstpost');
    myPost.update({title: e.target.value })
}