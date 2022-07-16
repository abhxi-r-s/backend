const express=require("express")
const CourseData=require('./src/model/CourseData');
const app= express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// courseList=[{
//     "courseTitle":"React",
//     "courseDescription":"React Course",
//     "courseDuration":"4 months",
//     "courseDate":"2022-05-06",
//     "courseVenue":"ONLINE"
// },
// {
//     "courseTitle":"Action",
//     "courseDescription":"Action Course",
//     "courseDuration":"6 months",
//     "courseDate":"2022-06-07",
//     "courseVenue":"ONLINE"


// },
// {
//     "courseTitle":"Reaction",
//     "courseDescription":"Reaction Course",
//     "courseDuration":"8 months",
//     "courseDate":"2022-05-09",
//     "courseVenue":"ONLINE"

// },
// {
//     "courseTitle":"Sensation",
//     "courseDescription":"Sensation Course",
//     "courseDuration":"10 months",
//     "courseDate":"2022-07-09",
//     "courseVenue":"ONLINE"

// }
// ];
// app.get('/getcourse',function(req,res){

//     res.send(courseList);

// }) ;
// app.post('/addcourse',function(req,res){

//     console.log(req.body);
//     courseList.push(req.body);
//     res.status(200).send(courseList);

// });








app.get('/getcourse',function(req,res){

    CourseData.find().then(function(courses){

        console.log(courses);
        res.send(courses);
    })
})

app.post('/addcourse',function(req,res)
{

    var item={

courseTitle:req.body.courseTitle,
courseDescription:req.body.courseDescription,
courseVenue:req.body.courseVenue,
courseDuration:req.body.courseDuration,
courseDate:req.body.courseDate

}
var course=CourseData(item);
course.save();

CourseData.find()
.then(function(course){
    res.send(course);


});

})
app.put('/update/:id',function(req,res){
const id=req.params.id;
courseTitle=req.body.courseTitle;
courseDescription=req.body.courseDescription;
courseVenue=req.body.courseVenue;
courseDuration=req.body.courseDuration;
courseDate=req.body.courseDate;

CourseData.findByIdAndUpdate({"_id":id},
{$set:{"courseTitle":courseTitle,
"courseDescription":courseDescription,
"courseVenue":courseVenue,
"courseDuration":courseDuration,
"courseDate":courseDate
}}).then(function(){res.send("Updated")});
})

app.delete('/delete/:id',function(req,res){
    const id=req.params.id;
    CourseData.findByIdAndDelete(id,function()
    {
        res.send("Deleted")
    })
})

app.listen(3000);
console.log("Server Ready");