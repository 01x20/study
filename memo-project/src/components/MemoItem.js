function MemoItem({ children, onClick }) {
  return (
    <div className="MemoItem" onClick={onClick}>
      {children}
    </div>
  );
}

export default MemoItem;
