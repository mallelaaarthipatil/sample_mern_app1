from fastapi import APIRouter
from models import staff
from database import staff_collection
staff_router=APIRouter(prefix="/staff")
@staff_router.get("/getStaffs")
def getStaffs():
    return "get staff method called"
@staff_router.post("/addstaff")
def addstaff():
    return "add staff method is called"