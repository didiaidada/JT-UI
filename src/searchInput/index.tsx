import React from 'react';

function SearchInput() {
  // const [inputValue, setInputValue] = useState('');
  // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {};
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputValue(e.target.value);
  // };
  return (
    <div className="search-input">
      <span className="iconfont iconsousuo"></span>
      <input
        type="text"
        placeholder="搜索能力名称或描述"
        // value={inputValue}
        // onKeyDown={handleKeyDown}
        // onChange={event => handleChange(event)}
      />
    </div>
  );
}
export default SearchInput;
