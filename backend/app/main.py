from random import choice
from flask import request, Flask
from flask_cors import CORS

from util.generatePostcard import generatePostcard
from util.addBackgroundToImage import addBackgroundToImage
from util.ipfsUpload import ipfsUpload

from PIL import Image
from io import BytesIO
import base64

app = Flask(__name__)
CORS(app)

locationImages = [
    # "Athens_Acropolis.jpg",
    "Toronto_CN_Tower.jpg",
]

def pilImgToB64(img: Image):
    output = BytesIO()
    img.save(output, format='JPEG')
    img_b64 = base64.b64encode(output.getvalue())

    return img_b64.decode("ascii")

@app.route("/addBackgroundToImage", methods=['POST'])
def bgImgApi():
    randomBGFname = choice(locationImages)
    randomBG = Image.open(f"assets/locationImages/{randomBGFname}")

    return pilImgToB64(addBackgroundToImage(request.json["selfie"], pilImgToB64(randomBG)))

@app.route("/generatePostcard", methods=['POST'])
def postcardGenApi():
    print(request.json)
    postcardImg = Image.open(BytesIO(base64.b64decode(request.json["postcardImg"])))
    return pilImgToB64(generatePostcard(request.json["msg"], request.json["from"], request.json["to"], postcardImg))

@app.route("/ipfsUpload", methods=['POST'])
def ipfsUploadApi():
    return ipfsUpload(request.json["img_b64"])

