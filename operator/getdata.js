(function() 
{
    // Initialize Firebase
      // Initialize Firebase
      var config = 
        {
            apiKey  : "AIzaSyBa1opQ3k_aULxrTn9Tvp3kNva6ryIMkZ4",
            authDomain : "ccmproject-b499c.firebaseapp.com",
            databaseURL : "https://ccmproject-b499c.firebaseio.com",
            projectId : "ccmproject-b499c",
            storageBucket : "ccmproject-b499c.appspot.com",
            messagingSenderId : "724127457400"
        };
        firebase.initializeApp(config);

    const firestore = firebase.firestore();
    const settings = {/* your settings... */ timestampsInSnapshots: true};
    firestore.settings(settings);

    const docRef = firestore.doc("Machines/1st machine");
    
    getRealtimeUpdates = function() 
            {
                docRef.onSnapshot(function (doc)
                {
                    if (doc && doc.exists) 
                    {
                        const myData = doc.data();
                        if(myData.st_sensorWorkingOrNot === true)
                        {
                            document.getElementById("st_sensorWorkingOrNot").style.backgroundColor = "#8bc34a";
                            document.getElementById("st_sensorWorkingOrNot").innerHTML = "運作"
                            console.log("true");
                        } 
                        else 
                        {
                            document.getElementById("st_sensorWorkingOrNot").style.backgroundColor = "#f44336";
                            document.getElementById("st_sensorWorkingOrNot").innerHTML = "故障"
                            console.log("false");
                        }
                    }
                });
            }
            getRealtimeUpdates();
}());
