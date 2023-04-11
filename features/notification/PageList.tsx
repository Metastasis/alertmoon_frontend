import useSWR from 'swr';
import {Container, Center, Title, Loader, Paper, Text} from '@mantine/core';
import {searchNotifications} from './api';
import {NotificationModel} from './NotificationModel';

export default function PageList() {
  const result = useSWR('notification.PageList', () => searchNotifications());
  return (
    <Container p="md">
      {result.data && result.data.length !== 0 ? (
        <ul>
          {result.data.map((notification) => (
            <ListItem key={notification.id} {...notification} />
          ))}
        </ul>
      ) : null}
      {result.data?.length === 0 && <ListEmpty />}
      {result.error && <ListError />}
      {!result.data && !result.error && <ListLoading />}
    </Container>
  )
}

function ListEmpty() {
  return (
    <Center>
      <Title order={3}>Список пуст</Title>
    </Center>
  );
}

function ListLoading() {
  return (
    <Center>
      <Title order={3}>Загружаем список</Title>
      <Loader ml="xs"/>
    </Center>
  );
}

function ListError() {
  return (
    <Center>
      <Title order={3}>Ошибка загрузки списка</Title>
    </Center>
  );
}

function ListItem({content}: NotificationModel) {
  return (
    <Paper shadow="sm" p="md" mb="md">
      <Text size="md">{content}</Text>
    </Paper>
  );
}
