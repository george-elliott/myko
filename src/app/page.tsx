import App from './App';
import fs from 'fs';

export default function Home() {
  const result = fs.readFileSync(process.cwd() + '/demo.csv', 'utf8');
  return (
    <main>
      <App csv={result}/>
    </main>
  );
}
