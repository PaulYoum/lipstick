document.addEventListener("DOMContentLoaded", event=>{
    const app = firebase.app();
    console.log(app);

    const db = firebase.firestore();

    const outValues = db.collection('sharedmessages').doc('message');

    outValues.onSnapshot(doc =>{
        const data = doc.data();
        document.querySelector('#title').innerHTML = data.outData;
    });

    const inValue = db.collection('sharedmessages').doc('inMessage');

    inValue.onSnapshot(doc =>{
        const receive = doc.data();
        document.querySelector('#mockValue').innerHTML = receive.inData;
    });
});

function updatePost(e){
    const db = firebase.firestore();
    const outValues = db.collection('sharedmessages').doc('message');
    outValues.update({outData: e.target.value })
}

function sendForward(){
  const db = firebase.firestore();
  const outValues = db.collection('sharedmessages').doc('message');
  outValues.update({outData: 'start' })
}

function sendStop(){
  const db = firebase.firestore();
  const outValues = db.collection('sharedmessages').doc('message');
  outValues.update({outData: 'stp' })
}

function requestTemp(){
  const db = firebase.firestore();
  const outValues = db.collection('sharedmessages').doc('requesttemp');
  outValues.update({isrequesting: 'readtemp' })
}


