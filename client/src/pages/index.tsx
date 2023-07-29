import { useState, ChangeEvent, FormEvent } from 'react';
import Head from 'next/head';
import { Button, Textarea, Text, Spacer, Card, Container, Loading } from '@nextui-org/react';

interface IResponse {
  answer: string;
}

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [question, setQuestion] = useState<string>('');
  const [response, setResponse] = useState<IResponse | null>(null);
  const [error, setError] = useState<string>('');
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
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Container>
          <Text h2>Upload your PDF and ask a question</Text>
          <Card variant='bordered'>
            <Card.Body>
              {error && (
                <Card variant='bordered'>
                  <Card.Header>
                    <Text color='error'>{error}</Text>
                  </Card.Header>
                </Card>
              )}

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

          {response && (
            <>
              <Spacer y={1} />
              <Text h3>Answer:</Text>
              <Card>
                <Card.Body>
                  <Text color='success'>{response.answer}</Text>
                </Card.Body>
              </Card>
            </>
          )}
        </Container>
      </main>
    </>
  );
}
