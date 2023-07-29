import { Card, Text } from '@nextui-org/react';
import React from 'react';

interface ErrorCardProps {
  error: string;
}

const ErrorCard: React.FC<ErrorCardProps> = ({ error }) => (
  <Card variant='bordered'>
    <Card.Header>
      <Text color='error'>{error}</Text>
    </Card.Header>
  </Card>
);

export default ErrorCard;
