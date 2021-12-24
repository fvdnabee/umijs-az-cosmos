import styles from './index.less';

import { CosmosClient } from '@azure/cosmos';
const cosmosDbInfo = {
  endpoint: 'https://mycosmosdb.documents.azure.com',
  database: 'myDatabase',
  container: 'myContainer',
};
const myResourceToken = 'foobar';
const resourcePartitionKey = 'myPartionKey';

export default function IndexPage() {
  const { endpoint, database, container } = cosmosDbInfo;

  const client = new CosmosClient({
    endpoint,
    tokenProvider: (request) => Promise.resolve(myResourceToken),
  })
    .database(database)
    .container(container);

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
