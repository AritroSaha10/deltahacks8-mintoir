from PIL import ImageDraw, Image, ImageFont
import requests
import json
import time
import base64
from PIL import Image
from io import BytesIO

url = "https://api.pinata.cloud/pinning/pinFileToIPFS"
bearer = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJmZjk4NjYyNi02ZTc0LTQ3ZWQtOTE0Ny0xZmJiMzIwMGVmNmUiLCJlbWFpbCI6InNhaGFhcml0cm8yMUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlfSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiM2VmZmUyNjExNGVjNjJiY2YzNTIiLCJzY29wZWRLZXlTZWNyZXQiOiI2OGJhN2EyZTZjNDhhZWYzNDc1ZWQwYTk4MWM0YjNlOTBmMDQxNjUxNmE4YzgzY2MxZDM4NDA3MWU2NjBmYmMyIiwiaWF0IjoxNjQyMzE3ODU0fQ.2l-vwC5meenPBnYPbOr67wGZ0NX9Mgc_KKebhq8vXHw"

header = {'Authorization': 'Bearer {}'.format(bearer)}

def pilImgToB64(img: Image):
    output = BytesIO()
    img.save(output, format='JPEG')
    img_b64 = base64.b64encode(output.getvalue())

    return img_b64.decode("ascii")

def ipfsUpload(imgB64):
    files = {'file': (f'{int(time.time())}.jpg', BytesIO(base64.b64decode(imgB64)))}
    r = requests.post(url, headers=header, files=files)
    return r.json()["IpfsHash"]

if __name__ == "__main__":
    img = pilImgToB64(Image.open("bg.jpg")).encode("ascii")
    ipfsUpload(img)