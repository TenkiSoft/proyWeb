from flask import Flask, render_template
from content.utils.sections import SectionContent


app = Flask(__name__)


@app.route('/')
def index():
    Sections = SectionContent()
    content_pages = Sections.get_content()
    return render_template('index.html',content_pages=content_pages)
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)