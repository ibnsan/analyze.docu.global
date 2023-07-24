from flask import request, jsonify
import uuid
import os

from server.api.openai_api import OpenAI_API
from server.services.analyzers.pdf_analyzer import PDFAnalyzer

TEMP_FOLDER = os.getenv('TEMP_FOLDER')


def configure_routes(app):
    @app.route('/analyze', methods=['POST'])
    def analyze():
        # assuming you are sending file and question as form-data in request
        file = request.files['file']
        question = request.form['question']

        # checking file extension
        if not file.filename.endswith('.pdf'):
            return jsonify({"error": "Invalid file format. Please upload a PDF file."}), 400

        # generate unique file name
        filename = f"{uuid.uuid4()}.pdf"
        filepath = os.path.join(TEMP_FOLDER, filename)

        # make sure the temp folder exists
        os.makedirs(TEMP_FOLDER, exist_ok=True)

        # save the file
        file.save(filepath)

        try:
            # creating a PDFAnalyzer instance
            pdf_analyzer = PDFAnalyzer(filepath, question)

            # analyze and get the text
            text = pdf_analyzer.process()

            # creating a OpenAI_API instance and getting the answer
            openai_api = OpenAI_API(question, text)
            answer = openai_api.ask_openai()

            # return as a json response
            return jsonify({"answer": answer})
        finally:
            # remove the file in any case
            if os.path.exists(filepath):
                os.remove(filepath)
