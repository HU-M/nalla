Webcam.set({
    width:355,
    height:305,
    image_format: 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot()
{
    
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image"src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/hxbd074E3/model.json',modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.error(error);        
    }else {
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML = results[0].label;
        document.getElementById("result_gesture_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if(results[0].label == "question")
        {
            document.getElementById("update_emoji").innerHTML ="&#9995;";
        }
        if(results[0].label == "victory")
        {
            document.getElementById("update_emoji").innerHTML ="&#9996;";
        }
        if(results[0].label == "perfect")
        {
            document.getElementById("update_emoji").innerHTML ="&#128076;";
        }
        if(results[1].label == "good")
        {
            document.getElementById("update_emoji2").innerHTML ="&#128077;";
        }
        if(results[1].label == "bad")
        {
            document.getElementById("update_emoji2").innerHTML ="&#128078;";
        }
        if(results[1].label == "alien peace")
        {
            document.getElementById("update_emoji2").innerHTML ="&#128406;";
        }
    }
}