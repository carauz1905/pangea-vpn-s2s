import PyPDF2
import io

with open('Proyecto Final.pdf', 'rb') as f:
    r = PyPDF2.PdfReader(f)
    text = '\n======\n'.join([p.extract_text() for p in r.pages])

with open('extracted_text.txt', 'w', encoding='utf-8') as f:
    f.write(text)
