
import { useState, useEffect } from 'react';

export const useTypingEffect = (text: string, typingInterval: number = 100) => {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!isTyping) return;

    if (typedText.length < text.length) {
      const timeoutId = setTimeout(() => {
        setTypedText(text.substring(0, typedText.length + 1));
      }, typingInterval);
      return () => clearTimeout(timeoutId);
    } else {
      setIsTyping(false);
    }
  }, [typedText, text, typingInterval, isTyping]);

  return typedText;
};
