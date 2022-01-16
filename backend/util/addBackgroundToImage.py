import mediapipe as mp
import numpy as np
from PIL import Image, ImageOps
from io import BytesIO
import base64
import datetime

mp_drawing = mp.solutions.drawing_utils
mp_selfie_segmentation = mp.solutions.selfie_segmentation

# backup if no bg provided
BG_COLOR = (192, 192, 192)  # gray

def addBackgroundToImage(selfie: str, bgImg: str=None):
    with mp_selfie_segmentation.SelfieSegmentation(
            model_selection=0) as selfie_segmentation:
        # Pillow Image representation
        bg_image = None

        if (bgImg != None):
            bg_image = Image.open(BytesIO(base64.b64decode(bgImg)))

        with Image.open(BytesIO(base64.b64decode(selfie))) as im:
            im = ImageOps.mirror(im)
            imNP = np.array(im)

            selfieWidth, selfieHeight = im.size
            bgWidth, bgHeight = bg_image.size

            # Crop background image to match selfie
            # Assumes BG is larger than selfie
            bg_image = bg_image.crop((
                int(bgWidth / 2) - selfieWidth,
                int(bgHeight / 2) - selfieHeight,
                int(bgWidth / 2),
                int(bgHeight / 2),
            ))

            # Improves performance to pass by ref
            imNP.flags.writeable = False

            results = selfie_segmentation.process(imNP)

            imNP.flags.writeable = True

            # Draw selfie segmentation on the background image.
            # To improve segmentation around boundaries, consider applying a joint
            # bilateral filter to "results.segmentation_mask" with "image".
            condition = np.stack(
                (results.segmentation_mask,) * 3, axis=-1) > 0.1

            # The background can be customized.
            #   a) Load an image (with the same width and height of the input image) to
            #      be the background, e.g., bg_image = cv2.imread('/path/to/image/file')
            #   b) Blur the input image by applying image filtering, e.g.,
            #      bg_image = cv2.GaussianBlur(image,(55,55),0)
            if bg_image is None:
                bg_image = np.zeros(imNP.shape, dtype=np.uint8)
                bg_image[:] = BG_COLOR
            output_image = np.where(condition, imNP, bg_image)

            # Convert back to PIL
            imSegmented = Image.fromarray(np.uint8(output_image))

            return imSegmented


# Demo
fgName = "test3.jpg"
bgName = "bg.jpg"
if __name__ == "__main__":
    selfieOutput = BytesIO()
    Image.open(fgName).save(selfieOutput, format='JPEG')
    selfie_b64 = base64.b64encode(selfieOutput.getvalue())

    selfieWidth, selfieHeight = Image.open(fgName).size

    bgOutput = BytesIO()
    bgImg = Image.open(bgName)

    bgWidth, bgHeight = bgImg.size

    # Crop background image to match selfie
    # Assumes BG is larger than selfie
    bgImgCrop = bgImg.crop((
        bgWidth / 2 - selfieWidth,
        bgHeight / 2 - selfieHeight,
        bgWidth / 2,
        bgHeight / 2,
    ))

    bgImgCrop.save(bgOutput, format='JPEG')
    bg_b64 = base64.b64encode(bgOutput.getvalue())

    segmentedImg = addBackgroundToImage(
        selfie_b64,
        bg_b64
    )

    im = Image.open(BytesIO(base64.b64decode(segmentedImg)))
    im.show()
    im.save(
        f"output-{datetime.datetime.now().strftime('%Y-%m-%d %H-%M-%S')}.png", "png")
