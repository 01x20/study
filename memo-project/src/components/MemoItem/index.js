import './index.css';

function MemoItem({ children, onClickItem, onClickDelete, isSelected }) {
  return (
    <div
      className={'MemoItem' + (isSelected ? ' selected' : '')}
      onClick={onClickItem}
    >
      {children}
      <button className="MemoItem_delete_button" onClick={onClickDelete}>
        X
      </button>
    </div>
  );
}

export default MemoItem;
