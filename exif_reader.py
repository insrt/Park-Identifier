from PIL import Image
from PIL.ExifTags import TAGS
from PIL.ExifTags import GPSTAGS

ret={}

image = Image.open('test.jpg')

info = image._getexif()

for tag, value in info.items():
	decoded = TAGS.get(tag, tag)
	ret[decoded] = value

print(ret['GPSInfo'])