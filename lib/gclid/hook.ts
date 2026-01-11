'use client';

import { useState, useEffect, useCallback } from 'react';
import { appendGCLID } from './appender';

// Google Ads Help: support.google.com/google-ads/answer/9744275
const GCLID_COOKIE_NAME = '_gclid';
const GCLID_EXPIRY_DAYS = 90; // Google standartı

// Cookie-yə yaz
function setGCLIDCookie(gclid: string) {
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + GCLID_EXPIRY_DAYS);
  document.cookie = `${GCLID_COOKIE_NAME}=${encodeURIComponent(gclid)}; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`;
}

// Cookie-dən oxu
function getGCLIDFromCookie(): string | null {
  if (typeof document === 'undefined') return null;
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === GCLID_COOKIE_NAME) {
      return decodeURIComponent(value);
    }
  }
  return null;
}

// URL-dən gclid parametrini al
function getGCLIDFromURL(paramName: string = 'gclid'): string | null {
  if (typeof window === 'undefined') return null;
  const params = new URLSearchParams(window.location.search);
  return params.get(paramName);
}

// GCLID hook - URL-dən alıb affiliate linklərə əlavə edir
export function useGCLID(paramName: string = 'gclid') {
  const [gclid, setGclid] = useState<string | null>(null);
  
  useEffect(() => {
    const updateGCLID = () => {
      const gclidFromUrl = getGCLIDFromURL(paramName);
      
      if (gclidFromUrl) {
        setGCLIDCookie(gclidFromUrl);
        setGclid(gclidFromUrl);
      } else {
        const storedGclid = getGCLIDFromCookie();
        setGclid(storedGclid);
      }
    };

    updateGCLID();
    
    // URL dəyişəndə yenilə
    window.addEventListener('popstate', updateGCLID);
    return () => window.removeEventListener('popstate', updateGCLID);
  }, [paramName]);

  const appendToUrl = useCallback((baseUrl: string) => {
    return appendGCLID(baseUrl, gclid);
  }, [gclid]);

  return { gclid, appendToUrl };
}

// Navigation üçün utility
export function getStoredGCLID(): string | null {
  return getGCLIDFromCookie();
}
