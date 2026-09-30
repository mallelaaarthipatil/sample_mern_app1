from fastapi import FastAPI
from pydantic import BaseModel
class Student(BaseModel):
    name:str
    email:str
    age:int
    mark:float

app=FastAPI()
@app.get("/getstudents")
def getstudents():
    return stu

@app.post("/register")
def register(stu:Student):
    return "Register api called"
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