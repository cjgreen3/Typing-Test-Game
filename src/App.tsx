import {faker} from '@faker-js/faker';
import RestartButton from './components/RestartButton';
import Results from './components/Results';

const words =faker.random.words(10)
function App() {
  return (
    <>
    <CountdownTimer time={60} />
    <GeneratedWords words={words} />
    <RestartButton className={"mx-auto mt-10 text-slate-500"} onRestart={() => {}} />
    <Results errors={3} accuracyPercentage={90} total={10} className={"mx-auto mt-10"} />
    </>
  );
}
const GeneratedWords = ({words}: { words: string}) => {
  return (
    <div className="text-4xl text-center text-slate-500">
      {words}
    </div>
  );
}

const CountdownTimer = ({time}: { time: number }) => {
  return (
    <h3 className="text-5xl text-center text-primary-400 font-large">
      Time: {time}
    </h3>
  );
}

export default App;
