prediction1 = "";
Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90,
});
camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot()
{
    Webcam.snap(function (data_uri) {
    document.getElementById("result").innerHTML = '<img id="captured_image" src=" '+data_uri+' "/>';
    });
}

console.log("ml5 version",ml5.version);

classifier =ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Tfx2mMdAl/model.json",modelLoaded);

function modelLoaded()
{
    console.log("Model Loaded!")
}

function check()
{
    img = document.getElementById("captured_image");
    classifier.classify(img , gotResults);
}

function gotResults()
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("prediction_name").innerHTML = results[0].lable;
        prediction1 = results[0].lable;
         if(results[0].lable == "victory")
         {
            document.getElementById("emoji_1").innerHTML = "&#9996;";
         }if(results[0].lable == "amazing")
         {
            document.getElementById("emoji_1").innerHTML = "&#128076;";
         }
         if(results[0].lable == "rock")
         {
            document.getElementById("emoji_1").innerHTML = "&#129304;";
         }
         if(results[0].lable == "best")
         {
            document.getElementById("emoji_1").innerHTML = "&#128077;";
         }
         if(results[0].lable == "dislike")
         {
            document.getElementById("emoji_1").innerHTML = "&#128078;";
         }
    }
}
