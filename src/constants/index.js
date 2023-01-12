import IntroImage1 from '../assets/intro/intro1.svg';
import IntroImage2 from '../assets/intro/intro2.svg';
import IntroImage3 from '../assets/intro/intro3.svg';
import IntroImage4 from '../assets/intro/intro4.svg';

import ScanSingle from '../assets/home/Scan-Single.svg';
import ScanBatch from '../assets/home/Scan-Batch.svg';
import ScanOCR from '../assets/home/Scan-OCR.svg';
import SceneImage from '../assets/home/SceneImage.png';

export const INTRO_DATA = [
  {
    id: 1,
    title: 'Scan anything in HD, wherever you are...',
    description:
      'Simply launch the AirScan app and scan any document, papers or real world photographs in seconds.',
    image: <IntroImage1 />,
    color: '#fff',
  },
  {
    id: 2,
    title: 'Navigate work documents like a Pro',
    description:
      'Scan and organize your work documents in structured folders. Scan single or multiple documents in one swift go. Merge scans into PDFs, reorder pages and share them on the fly.',
    image: <IntroImage2 />,
    color: '#fff',
  },
  {
    id: 3,
    title: 'Less time scanning homework = more time for fun',
    description:
      'Scanning of homework and assignments are a breeze with AirScan. Capture scans, generate PDFs and push them to any app installed on your phone. Its that easy!',
    image: <IntroImage3 />,
    color: '#fff',
  },
  {
    id: 4,
    title: 'Covert Pictures to Text with our next generation offline OCR',
    description:
      'Leverage our cutting edge machine learning OCR to convert documents to text in seconds with accurate results. Share OCR scans as Doc files or PDFs in seconds',
    image: <IntroImage4 />,
    color: '#fff',
  },
];

export const INFO_DATA = [
  {
    image: <ScanSingle />,
    text: 'Single Scan',
  },
  {
    image: <ScanBatch />,
    text: 'Batch Scan',
  },
  {
    image: <ScanOCR />,
    text: 'Scan to Text',
  },
];

export const RECENT_DATA = [
  {
    id: 1,
    image: SceneImage,
    posted: '2d ago',
  },
  {
    id: 2,
    image: SceneImage,
    posted: '3d ago',
  },
  {
    id: 3,
    image: SceneImage,
    posted: '4d ago',
  },
  {
    id: 4,
    image: SceneImage,
    posted: '5d ago',
  },
];
