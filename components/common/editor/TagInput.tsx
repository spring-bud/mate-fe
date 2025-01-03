'use client';

import { useState } from "react";

interface TagInputProps {
  tags: string[];
  onTagAdd: (tag: string) => void;
  onTagRemove: (tag: string) => void;
  maxTags?: number;
}

export default function TagInput({ tags, onTagAdd, onTagRemove, maxTags = 10 }: TagInputProps) {
  const [tagInput, setTagInput] = useState('');
  const bannedWords = ['비속어1', '비속어2', '욕설', 'ㅅㅂ', 'ㅆㅂ', '시발', '씨발'];

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === ' ' || e.key === 'Enter') && tagInput.trim()) {
      e.preventDefault();
      const newTag = tagInput.trim().toLowerCase();

      // 유효성 검사
      if (tags.length >= maxTags) {
        alert(`태그는 최대 ${maxTags}개까지만 추가할 수 있습니다.`);
        return;
      }

      if (tags.includes(newTag)) {
        alert('이미 존재하는 태그입니다.');
        setTagInput('');
        return;
      }

      if (bannedWords.some((word) => newTag.includes(word))) {
        alert('부적절한 단어가 포함되어 있습니다.');
        return;
      }

      onTagAdd(newTag);
      setTagInput('');
    }

    // Backspace 키로 마지막 태그 삭제
    if (e.key === 'Backspace' && tagInput === '' && tags.length > 0) {
      e.preventDefault();
      onTagRemove(tags[tags.length - 1]);
    }
  };

  return (
    <div className="flex-1 min-w-0">
      <div className="flex flex-wrap gap-2 items-center">
        {tags.map((tag, index) => (
          <span
            key={index}
            onClick={() => onTagRemove(tag)}
            className="relative inline-block px-3 py-1 bg-blue-500 text-white rounded-md text-sm cursor-pointer hover:bg-blue-600 transition-colors"
          >
            {tag}
          </span>
        ))}
        {tags.length < maxTags && (
          <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="태그 입력 후 스페이스바 또는 엔터"
            className="min-w-[150px] flex-1 bg-transparent border-none outline-none text-white placeholder-gray-500"
            maxLength={20}
          />
        )}
      </div>
      <div className="text-xs text-gray-500 mt-1">{`${tags.length}/${maxTags}개의 태그가 추가됨`}</div>
    </div>
  );
}