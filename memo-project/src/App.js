import { useCallback, useState } from 'react';
import './App.css';
import MemoContainer from './components/MemoContainer';
import SideBar from './components/SideBar';
import { setItem, getItem } from './lib/storage';
import debounce from 'lodash.debounce';

const debounceSetItem = debounce(setItem, 5000);

function App() {
  const [memos, setMemos] = useState(getItem('memo') || []);

  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  const setMemo = useCallback(
    (newMemo) => {
      const newMemos = [...memos];

      newMemos[selectedMemoIndex] = newMemo;

      setMemos(newMemos);
      debounceSetItem('memo', newMemos);
    },
    [memos, selectedMemoIndex],
  );

  const addMemo = useCallback(() => {
    const now = new Date().getTime();
    const newMemos = [
      ...memos,
      {
        title: 'Untitled',
        content: '',
        createdAt: now,
        updatedAt: now,
      },
    ];

    setMemos(newMemos);
    setSelectedMemoIndex(memos.length);
    debounceSetItem('memo', newMemos);
  }, [memos]);

  const deleteMemo = useCallback(
    (index) => {
      const newMemos = [...memos];

      newMemos.splice(index, 1);

      setMemos(newMemos);
      if (index === selectedMemoIndex) {
        setSelectedMemoIndex(0);
      }
      debounceSetItem('memo', newMemos);
    },
    [memos, selectedMemoIndex],
  );

  return (
    <div className="App">
      <SideBar
        memos={memos}
        addMemo={addMemo}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
        deleteMemo={deleteMemo}
      />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
