import Head from 'next/head';
import Button from '@material-ui/core/Button';
import withLayout from '../lib/withLayout';

const Index = () => (
  <div style={{ padding: '10px 45px' }}>
    <Head>
      <title>Index Page</title>
      <meta name="description" content="This is the index page description" />
    </Head>
    <p>Content on Index page</p>
    <Button>MUI button</Button>
  </div>
);

export default withLayout(Index);
