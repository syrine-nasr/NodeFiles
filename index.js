const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://SyrineUsing:tmira9mar@myfirstcluster.txktt.mongodb.net/test-e?retryWrites=true&w=majority',
{ useNewUrlParser : true, useUnifiedTopology : true})
            .then(()=> console.log('Mongo is up'))
            .catch(err => console.log('Mongi is Down.raison :', err));

const courseSchema = new mongoose.Schema({
    title : String, 
    author : String, 
    tags : [String],
    price : Number, 
    date : {type : Date, default : Date.now()},
    isPublished : Boolean
})

const Course = mongoose.model('Course',courseSchema);

//save 
async function saveCourse(){
    let course = new Course({
        title : 'Angular Course',
        author : 'S.Saoudi',
        tags: ['Angular','ts','frontend'],
        price : 200,
        isPublished : false 
    });
    console.log(await course.save());

}



// saveCourse();

async function getCourses(){
    let courses = await Course.find();
    console.log('Data: ', courses); 
}

// getCourses();

async function getCoursesWithFilter(){
    // find({author:'H.Rojbani', isPublished : false})
    let courses = await Course.find()
                                // .limit(2);
                                // .sort({title:-1})
                                   .select({title : 1, price : 1, _id:0});
    console.log('Data: ', courses);
}


// getCoursesWithFilter();

 //Operator
 // eq(equal), neq (not equal)
 //gt(greater than), gte 
 //lt(less than), lte 
 //in , nin 
async function getCoursesWithOperator(){
    
    let courses = await Course.find()
                                // .or([{price : {$nin : [100,120,150]}},{isPublished :true}])
                                .and([{price : {$nin : [100,120,150]}},{isPublished :true}])
                    .select({title : 1, price : 1, _id:0});
    console.log('Data: ', courses);
}

getCoursesWithOperator();