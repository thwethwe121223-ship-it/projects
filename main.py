from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI(title="BIOS AI API")

# Mock Database
db = {
    1: {"id": 1, "name": "Strategic Audit", "status": "completed"},
    2: {"id": 2, "name": "Market Analysis", "status": "pending"}
}

class Project(BaseModel):
    id: int
    name: str
    status: str

# 1. GET - Read Data (200 OK)
@app.get("/projects", response_model=List[Project])
async def get_projects():
    return list(db.values())

# 2. POST - Send Data (201 Created)
@app.post("/projects", status_code=status.HTTP_201_CREATED)
async def create_project(project: Project):
    if project.id in db:
        raise HTTPException(status_code=400, detail="Project already exists")
    db[project.id] = project.dict()
    return {"message": "Created", "data": db[project.id]}

# 3. PUT - Replace (200 Updated)
@app.put("/projects/{project_id}")
async def update_project(project_id: int, project: Project):
    if project_id not in db:
        raise HTTPException(status_code=404, detail="Not found")
    db[project_id] = project.dict()
    return {"message": "Updated", "data": db[project_id]}

# 4. PATCH - Partial Update (200 Patched)
@app.patch("/projects/{project_id}")
async def patch_project(project_id: int, status_update: str):
    if project_id not in db:
        raise HTTPException(status_code=404, detail="Not found")
    db[project_id]["status"] = status_update
    return {"message": "Patched", "data": db[project_id]}

# 5. DELETE - Remove (204 No Content)
@app.delete("/projects/{project_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_project(project_id: int):
    if project_id in db:
        del db[project_id]
    return None