import { useState, useEffect, useRef } from 'react';
import { InputRef, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from './Search.module.css';

type ISearchProps = {
  wrapperClassName?: string;
  inputClassName?: string;
  iconClassName?: string;
  buttonClassName?: string;
}

export default function CSearch({ iconClassName, wrapperClassName, inputClassName, buttonClassName }: ISearchProps) {
  const [isSearchActive, setSearchActive] = useState<boolean>(false);
  const searchContainerRef = useRef<HTMLInputElement>(null);
  const searchInputRef = useRef<InputRef>(null);

  useEffect(() => {
    if (isSearchActive && searchInputRef.current) {
      setTimeout(() =>
        searchInputRef.current && searchInputRef.current.focus(),
        100
      );
    }
  }, [isSearchActive]);

  const handleClickOutside = (event: MouseEvent) => {
    const targetNode = event.target as Node;
    if (searchContainerRef.current && !searchContainerRef.current.contains(targetNode)) {
      setSearchActive(false);
    }
  };

  const handleSearchButton = () => {
    if (!isSearchActive) {
      document.addEventListener('click', handleClickOutside);
      setSearchActive(prevIsSearchActive => !prevIsSearchActive);
      return;
    }
    document.removeEventListener('click', handleClickOutside);
  }

  return (
    <div
      ref={searchContainerRef}
      className={
        [
          'flex content-center',
          styles.search,
          isSearchActive ? styles.active : '',
          wrapperClassName ?? '',
        ].join(' ').trim()
      }
    >
      <Input
        ref={searchInputRef}
        className={
          [
            styles.search__input,
            isSearchActive ? styles.active : '',
            inputClassName ?? '',
          ].join(' ').trim()
        }
        placeholder="Поиск по сайту ..."
      />
      <button
        className={
          [
            'active-opacity hover-brightness',
            styles.search__button,
            buttonClassName ?? '',
          ].join(' ').trim()
        }
        onClick={() => handleSearchButton()}
      >
        <SearchOutlined className={
          [
            styles.search__icon,
            iconClassName ?? ''
          ].join(' ').trim()
        } />
      </button>
    </div>
  );
}
