import os
import openai
from dotenv import load_dotenv

load_dotenv()


class OpenAI_API:
    def __init__(self, question, context):
        self.question = question
        self.context = context

    def ask_openai(self):
        """
        Sends a request to the OpenAI API with a question and a context.

        Returns:
            str: answer from OpenAI API.
        """
        openai.api_key = os.getenv('OPENAI_API_KEY')

        response = openai.Completion.create(
            engine="text-davinci-003",
            prompt=f"{self.context}\n{self.question}",
            max_tokens=100
        )

        # We assume the last item in 'choices' is the desired answer
        answer = response.choices[-1]["text"].strip()

        return answer
