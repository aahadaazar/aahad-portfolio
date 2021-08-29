import { useEffect, useState } from 'react';
import './App.css';
import MainView from './containers/MainView/MainView';
import axios from 'axios';

function App() {
  const [repo, setRepo] = useState([]);
  useEffect(() => {
    axios.get('https://api.github.com/users/aahadaazar/repos', {
      // this header is to get topics in repo
      headers: {
        Accept: 'application/vnd.github.mercy-preview+json'
      }
    }).then(res => {
      // res.data.forEach(o => {
      //   if (o.topics.length > 0 && o.topics.includes('javascript')) {
      //     console.log(o)
      //   }
      // })
      setRepo(res.data.filter(o => o.topics.includes('javascript')));
    },
      err => {
        console.log(err);
      })
  }, []);
  return (
    <div className="App">
      <MainView repo={repo} />
    </div>
  );
}

export default App;
