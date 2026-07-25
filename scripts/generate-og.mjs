// Renders the social-share card to public/og.png.
//
// Why a script instead of app/opengraph-image.tsx: Next's dynamic OG route
// exports an extensionless file, and GitHub Pages types those as
// application/octet-stream — every social crawler then rejects the image.
// Writing a real .png into public/ sidesteps that, and gives us a stable URL.
//
// Run `npm run og` after changing the name/tagline below, and commit the PNG.
import { ImageResponse } from 'next/og.js';
import React from 'react';
import { writeFile } from 'node:fs/promises';

const h = React.createElement;

const BG = '#0D0F12';
const SURFACE = '#15181D';
const BORDER = '#262B33';
const INK = '#ECEAE4';
const MUTED = '#8B909A';
const FAINT = '#7A7F8A';
const BLUE = '#5B8DEF';

const dot = (color) =>
  h('div', {
    style: { width: 14, height: 14, borderRadius: 7, background: color },
  });

const chip = (label) =>
  h(
    'div',
    {
      key: label,
      style: {
        border: `2px solid ${BORDER}`,
        borderRadius: 8,
        padding: '8px 16px',
      },
    },
    label,
  );

const card = h(
  'div',
  {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      background: BG,
      padding: 72,
      fontFamily: 'monospace',
    },
  },
  h(
    'div',
    {
      style: {
        display: 'flex',
        flexDirection: 'column',
        border: `2px solid ${BORDER}`,
        borderRadius: 16,
        background: SURFACE,
      },
    },
    // Title bar
    h(
      'div',
      {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '20px 28px',
          borderBottom: `2px solid ${BORDER}`,
        },
      },
      dot('#E35B6B'),
      dot('#E0A458'),
      dot(BLUE),
      h(
        'div',
        { style: { marginLeft: 16, fontSize: 22, color: FAINT } },
        'gregoryli@portfolio: ~',
      ),
    ),
    // Body
    h(
      'div',
      {
        style: {
          display: 'flex',
          flexDirection: 'column',
          padding: '40px 44px 48px',
        },
      },
      h(
        'div',
        { style: { display: 'flex', fontSize: 26, color: FAINT } },
        h('span', { style: { color: BLUE } }, 'gregoryli@portfolio'),
        h('span', null, ':~$ whoami'),
      ),
      h(
        'div',
        {
          style: {
            marginTop: 18,
            fontSize: 78,
            fontWeight: 700,
            color: INK,
            letterSpacing: -2,
          },
        },
        'Gregory Li',
      ),
      h(
        'div',
        { style: { marginTop: 14, fontSize: 30, color: MUTED } },
        'B.S. Computer Science, UCLA · Class of 2029',
      ),
      h(
        'div',
        {
          style: {
            marginTop: 34,
            display: 'flex',
            gap: 14,
            fontSize: 24,
            color: FAINT,
          },
        },
        ['full-stack', 'security', 'game-dev', 'research'].map(chip),
      ),
    ),
  ),
);

const png = await new ImageResponse(card, {
  width: 1200,
  height: 630,
}).arrayBuffer();

await writeFile('public/og.png', Buffer.from(png));
console.log(`Wrote public/og.png (${Buffer.from(png).length} bytes)`);
