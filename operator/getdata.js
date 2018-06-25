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
                        
                        if(myData.ConveyorSensorWorkingOrNot && myData.MotorSensorWorkingOrNot && myData.VibratorSensorWorkingOrNot === true)
                        {
                            document.getElementById("sensorWorkingOrNot").style.backgroundColor = "#8bc34a";
                            document.getElementById("sensorWorkingOrNot").innerHTML = "運作"
                            document.getElementById("errorOrNot").innerHTML = "正常運作"
                            console.log("true");
                        } 
                        else if(myData.ConveyorSensorWorkingOrNot === false && myData.MotorSensorWorkingOrNot === true && myData.VibratorSensorWorkingOrNot === true)
                        {
                            document.getElementById("sensorWorkingOrNot").style.backgroundColor = "#f44336";
                            document.getElementById("sensorWorkingOrNot").innerHTML = "故障"
                            var str = "Motor Error!!";
                            var result = str.link("https://www.w3schools.com");
                            document.getElementById("errorOrNot").innerHTML = "輸送帶需要檢修"
                            console.log("false");
                        }
                        else if(myData.ConveyorSensorWorkingOrNot === true && myData.MotorSensorWorkingOrNot === false && myData.VibratorSensorWorkingOrNot === true)
                        {
                            document.getElementById("sensorWorkingOrNot").style.backgroundColor = "#f44336";
                            document.getElementById("sensorWorkingOrNot").innerHTML = "故障"
                            var str = "Motor Error!!";
                            var result = str.link("https://www.w3schools.com");
                            document.getElementById("errorOrNot").innerHTML = "馬達需要檢修"
                            console.log("false");
                        }
                        else if(myData.ConveyorSensorWorkingOrNot === true && myData.MotorSensorWorkingOrNot === true && myData.VibratorSensorWorkingOrNot === false)
                        {
                            document.getElementById("sensorWorkingOrNot").style.backgroundColor = "#f44336";
                            document.getElementById("sensorWorkingOrNot").innerHTML = "故障"
                            var str = "Motor Error!!";
                            var result = str.link("https://www.w3schools.com");
                            document.getElementById("errorOrNot").innerHTML = "震動器需要檢修"
                            console.log("false");
                        }
                        else if(myData.ConveyorSensorWorkingOrNot === false && myData.MotorSensorWorkingOrNot === false && myData.VibratorSensorWorkingOrNot === true)
                        {
                            document.getElementById("sensorWorkingOrNot").style.backgroundColor = "#f44336";
                            document.getElementById("sensorWorkingOrNot").innerHTML = "故障"
                            var str = "Motor Error!!";
                            var result = str.link("https://www.w3schools.com");
                            document.getElementById("errorOrNot").innerHTML = "輸送帶、馬達需要檢修"
                            console.log("false");
                        }
                        else if(myData.ConveyorSensorWorkingOrNot === false && myData.MotorSensorWorkingOrNot === true && myData.VibratorSensorWorkingOrNot === false)
                        {
                            document.getElementById("sensorWorkingOrNot").style.backgroundColor = "#f44336";
                            document.getElementById("sensorWorkingOrNot").innerHTML = "故障"
                            var str = "Motor Error!!";
                            var result = str.link("https://www.w3schools.com");
                            document.getElementById("errorOrNot").innerHTML = "輸送帶、震動器需要檢修"
                            console.log("false");
                        }
                        else if(myData.ConveyorSensorWorkingOrNot === true && myData.MotorSensorWorkingOrNot === false && myData.VibratorSensorWorkingOrNot === false)
                        {
                            document.getElementById("sensorWorkingOrNot").style.backgroundColor = "#f44336";
                            document.getElementById("sensorWorkingOrNot").innerHTML = "故障"
                            var str = "Motor Error!!";
                            var result = str.link("https://www.w3schools.com");
                            document.getElementById("errorOrNot").innerHTML = "馬達、震動器需要檢修"
                            console.log("false");
                        }
                        else 
                        {
                            document.getElementById("sensorWorkingOrNot").style.backgroundColor = "#f44336";
                            document.getElementById("sensorWorkingOrNot").innerHTML = "故障"
                            var str = "Motor Error!!";
                            var result = str.link("https://www.w3schools.com");
                            document.getElementById("errorOrNot").innerHTML = "馬達、輸送帶、震動器檢修"
                            console.log("false");
                        }
                    }
                });
            }
            getRealtimeUpdates();
}());  
