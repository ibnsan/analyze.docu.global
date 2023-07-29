import { useState, ChangeEvent, FormEvent, Dispatch, SetStateAction, FC } from 'react';
import { Button, Textarea, Spacer, Card, Loading } from '@nextui-org/react';

interface FileUploadFormProps {
  setResponse: Dispatch<SetStateAction<{ answer: string } | null>>;
  setError: Dispatch<SetStateAction<string>>;
}

interface IResponse {
  answer: string;
}

const FileUploadForm: FC<FileUploadFormProps> = ({ setResponse, setError }) => {
  const [file, setFile] = useState<File | null>(null);
  const [question, setQuestion] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setFile(files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (question.trim() === '') {
      setError('Please enter a question.');
      return;
    }

    if (!file) {
      setError('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('question', question);

    setLoading(true);
    try {
      const result = await fetch('http://127.0.0.1:5000/analyze', {
        method: 'POST',
        body: formData,
      });

      const data: IResponse = await result.json();

      setResponse(data);
      setError('');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card variant='bordered'>
      <Card.Body>
        <form onSubmit={handleSubmit}>
          <input type='file'
                 onChange={handleFileChange}
                 accept='.pdf'
          />
          <Spacer y={1} />

          <Textarea
            fullWidth
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder='Your question'
          />

          <Spacer y={1} />

          <Button type='submit' disabled={loading}>
            {loading ?
              <Loading color='currentColor' size='sm' />
              :
              'Submit'
            }
          </Button>
        </form>
      </Card.Body>
    </Card>
  );
};

export default FileUploadForm;
