document.addEventListener("DOMContentLoaded", event=>{
    const app = firebase.app();
    console.log(app);

    const db = firebase.firestore();

    const myPost = db.collection('sharedmessages').doc('message');

    myPost.onSnapshot(doc =>{
        const data = doc.data();
        document.querySelector('#title').innerHTML = data.payload
    })
});

function updatePost(e){
    const db = firebase.firestore();
    const myPost = db.collection('sharedmessages').doc('message');
    myPost.update({payload: e.target.value })
}