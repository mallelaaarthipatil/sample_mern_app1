from pydantic import BaseModel
class Student(BaseModel):
    name:str
    email:str
    age:int
    mark:float
class staff(BaseModel):
    name:str
    eamil:str
    designation:str