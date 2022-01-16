from PIL import ImageDraw, Image, ImageFont
from textwrap import wrap
from random import randint

LOREM_IPSUM = """My friend,
I wish you could be here! The beaches, the weather, everything is so beautiful! You would love it here. Alas, you aren't, which is why I sent you this innovative NFT postcard!
"""

sampleFrom = "John Doe"
sampleTo = "Jane Smith"

fontFromTo = ImageFont.truetype("assets/fonts/Philosopher-Regular.ttf", 90)
fontMsg = ImageFont.truetype("assets/fonts/Philosopher-Regular.ttf", 120)

def generatePostcard(msg: str, fromPerson: str, toPerson: str, postcardImg):
    postcardFname = f"assets/postcards-jpg/postcard-{randint(1, 5)}.jpg"
    # postcardFname = f"assets/postcards/postcard-new.png"
    img = Image.open(postcardFname)

    # Resize postcard img to fit position
    postcardImg = postcardImg.resize((2468, 1389))

    # Put postcard on main
    img.paste(postcardImg, (266, 492))

    # From field
    ImageDraw.Draw(
        img  # Image
    ).text(
        (3000, 2200),  # Coordinates
        fromPerson,  # Text
        (0, 0, 0),  # Color
        font=fontFromTo  # Font
    )

    # To field
    ImageDraw.Draw(
        img  # Image
    ).text(
        (3000, 2560),  # Coordinates
        toPerson,  # Text
        (0, 0, 0),  # Color
        font=fontFromTo  # Font
    )

    new_body = ""
    lines = msg.split("\n")

    for line in lines:
        if len(line) > 50:
            w = wrap(line, width=50, break_long_words=True)
            line = '\n'.join(w)

        new_body += line + "\n"

    ImageDraw.Draw(
        img  # Image
    ).text(
        (260, 1930),  # Coordinates
        new_body,
        (0, 0, 0),  # Color
        font=fontMsg  # Font
    )

    img.show()

    return img

if __name__ == "__main__":
    generatePostcard(LOREM_IPSUM, sampleFrom, sampleTo).show()