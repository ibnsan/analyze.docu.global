import PyPDF2


class PDFAnalyzer:
    def __init__(self, file_path, question):
        self.file_path = file_path
        self.question = question

    def read_pdf(self):
        """
        Reads a PDF document and returns the content as a string.

        Returns:
            str: content of the PDF document.
        """
        pdf_file_obj = open(self.file_path, 'rb')
        pdf_reader = PyPDF2.PdfReader(pdf_file_obj)

        text = ""
        for page_num in range(len(pdf_reader.pages)):
            page = pdf_reader.pages[page_num]
            text += page.extract_text()

        pdf_file_obj.close()
        return text

    def process(self):
        """
        Main method to process the PDF document.

        Returns:
            str: content of the PDF document.
        """
        text = self.read_pdf()
        return text
