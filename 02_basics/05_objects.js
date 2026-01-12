//object de-structure

const course={
    coursename:"javascript",
    courseprice:"999",
    courseinstructor:"hitesh"
}

const {courseinstructor}=course
console.log(courseinstructor)

const {courseinstructor:instructor}=course
console.log(instructor)

