
import pypdf
import sys

pdf_path = "/Users/sifat/Project/Aaloo/public/resources/Team Aaloo - Presentations Slide - Fazla Rabbi - COMPUTING, AI & DIGITAL INNOVATION -Bangladesh - The Smart Solar Lamp Revolutionizing Fish Farming.pdf"

try:
    reader = pypdf.PdfReader(pdf_path)
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    print(text)
except Exception as e:
    print(f"Error extracting text: {e}")
