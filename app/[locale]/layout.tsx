import React from 'react';
import type { Metadata, Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import StickyContactWidget from '@/components/common/StickyContactWidget';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Falcon Tents - Premium Shade Solutions',
  description: 'Leading provider of car shades, custom tents, and shade installations across Saudi Arabia',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!['en', 'ar'].includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
      <StickyContactWidget />
      <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Ffalconten4241back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.16" />
      <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" />
    </NextIntlClientProvider>
  );
}