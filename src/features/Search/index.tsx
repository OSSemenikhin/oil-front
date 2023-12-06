import { useState, useEffect, useRef } from 'react';
import { InputRef, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from './Search.module.css';

type ISearchProps = {
  classNameWrapper?: string;
  classNameInput?: string;
  classNameIcon?: string;
  classNameButton?: string;
}

export default function CSearch({ classNameIcon, classNameWrapper, classNameInput, classNameButton }: ISearchProps) {
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
          classNameWrapper ?? '',
        ].join(' ').trim()
      }
    >
      <Input
        ref={searchInputRef}
        className={
          [
            styles.search__input,
            isSearchActive ? styles.active : '',
            classNameInput ?? '',
          ].join(' ').trim()
        }
        placeholder="Поиск по сайту ..."
      />
      <button
        className={
          [
            'active-opacity hover-brightness',
            styles.search__button,
            classNameButton ?? '',
          ].join(' ').trim()
        }
        onClick={() => handleSearchButton()}
      >
        <SearchOutlined className={
          [
            styles.search__icon,
            classNameIcon ?? ''
          ].join(' ').trim()
        } />
      </button>
    </div>
  );
}
