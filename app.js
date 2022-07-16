const express=require("express")
const app= express();
courseList=[{
    "courseTitle":"React",
    "courseDescription":"React Course",
    "courseDuration":"4 months",
    "courseDate":"2022-05-06",
    "courseVenue":"ONLINE"
},
{
    "courseTitle":"Action",
    "courseDescription":"Action Course",
    "courseDuration":"6 months",
    "courseDate":"2022-06-07",
    "courseVenue":"ONLINE"


},
{
    "courseTitle":"Reaction",
    "courseDescription":"Reaction Course",
    "courseDuration":"8 months",
    "courseDate":"2022-05-09",
    "courseVenue":"ONLINE"

},
{
    "courseTitle":"Sensation",
    "courseDescription":"Sensation Course",
    "courseDuration":"10 months",
    "courseDate":"2022-07-09",
    "courseVenue":"ONLINE"

}
]
app.get('/getcourse',function(req,res){

    res.send(courseList);

}) 
app.post('/addcourse',function(req,res){

    console.log(req.body)

}) 
app.listen(3000);