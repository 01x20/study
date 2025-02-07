import { useState } from 'react';
import './App.css';
import MemoContainer from './components/MemoContainer';
import SideBar from './components/SideBar';

function App() {
  const [memos, setMemos] = useState([
    {
      title: 'Memo 1',
      content: 'This is memo 1',
      createdAt: 1738913688881, //시간 값
      updatedAt: 1738913688881, //시간 값
    },
    {
      title: 'Memo 2',
      content: 'This is memo 2',
      createdAt: 1738913706955, //시간 값
      updatedAt: 1738913706955, //시간 값
    },
  ]);

  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  const setMemo = (newMemo) => {
    const newMemos = [...memos];

    newMemos[selectedMemoIndex] = newMemo;

    setMemos(newMemos);
  };

  return (
    <div className="App">
      <SideBar memos={memos} setSelectedMemoIndex={setSelectedMemoIndex} />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
