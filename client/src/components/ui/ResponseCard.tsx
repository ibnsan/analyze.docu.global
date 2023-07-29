import { Card, Text } from '@nextui-org/react';
import React from 'react';

interface ResponseCardProps {
  response: { answer: string };
}

const ResponseCard: React.FC<ResponseCardProps> = ({ response }) => (
  <Card>
    <Card.Body>
      <Text color='success'>{response.answer}</Text>
    </Card.Body>
  </Card>
);

export default ResponseCard;
