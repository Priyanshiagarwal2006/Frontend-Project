from fastapi import FastAPI
app = FastAPI()
@app.get("/")
def hello():
    return{'message' : 'hello world'}

@app.get("/about")
def hello():
    return{'message' : 'hello world hi hi'}