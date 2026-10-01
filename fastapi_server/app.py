from fastapi import FastAPI
from models import Student,staff
from database import student_collection,staff_collection

app=FastAPI()
def student_details(Student):
    return{
        "id":str(Student["_id"]),
        "name":Student["name"],
        "email":Student["email"],
        "age":Student["age"],
        "mark":Student["mark"]
    }
@app.get("/getstudents")
def getstudents():
    Student=student_collection.find()
    return [student_details(Student)for Student in Student]

@app.post("/register")
def register(stu:Student):
    result=student_collection.insert_one(stu.model_dump())
    return {"Message":"Inserted successfully"}
 

@app.put("/updateprofile")
def updateprofile():
    return "Update profile called"
@app.delete("/deleteprofile")
def deleteprofile():
    return "Deleted API called"
@app.get("/getstudentDet/{userid}")
def getstudentDet(userid:int):
    return{"user_id":userid}
@app.get("/getstudentsdetails")
def getstudentsdetails(page:int=1,limit:int=10):
    return{"page":page,"limit":limit}