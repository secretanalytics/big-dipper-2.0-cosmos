import React from 'react';
import {
  GithubIcon,
} from '@icons';

export const socialMediaLinks:{
  component: React.ReactNode;
  className: string;
  url: string;
}[] = [
  {
    component: <GithubIcon />,
    className: 'github',
    url: 'https://github.com/secretanalytics',
  },
];
