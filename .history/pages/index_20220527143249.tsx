import Head from 'next/head';
import { Form } from '../components/form/Forms';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title key="title">Home</title>
      </Head>

      <main>
        <h1>h1 title</h1>
        <h2>h2 title</h2>
        <h3>h3 title</h3>
        <h4>h4 title</h4>

        <p>
            This is a paragraph. Cat ipsum dolor sit amet, stand in front of the computer screen, sleep on keyboard, prow?? ew dog you drink from the toilet, yum yum warm milk hotter pls, ouch too hot. No, you can't close the door, i haven't decided whether or not i wanna go out use lap as chair, but car rides are evil. Ooh, are those your $250 dollar sandals? lemme use that as my litter box. 
        </p>

        <a href='/'>This i a link</a>
        <br />
        <button>Click me</button>
        <br />

        <div className="grid">
          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

        </div>
      </main>

    </Layout>
  )
}
