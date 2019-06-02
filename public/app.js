document.addEventListener("DOMContentLoaded", event=>{
    const app = firebase.app();
    console.log(app);

    const db = firebase.firestore();

    const tempValues = db.collection('sharedmessages').doc('temperature');
    tempValues.onSnapshot(doc => {
      const temp = doc.data();
      document.querySelector('#tempReadOut').innerHTML = temp.current + "&#176;"; 
    });

});


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


