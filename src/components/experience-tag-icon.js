import CloudIcon from '../assets/tags/cloud.svg';
import CodeIcon from '../assets/tags/code.svg';
import DataIcon from '../assets/tags/data.svg';
import DevvopsIcon from '../assets/tags/devops.svg';
import IdentityIcon from '../assets/tags/identity.svg';
import ModernizeIcon from '../assets/tags/modernize.svg';
import React from 'react';

const ExperienceTagIcon = ({ type }) => {
  switch (type.toLowerCase()) {
    case 'cloud':
      return <CloudIcon className="float-left" />;
    case 'code':
      return <CodeIcon className="float-left" />;
    case 'data':
      return <DataIcon className="float-left" />;
    case 'devops':
      return <DevvopsIcon className="float-left" />;
    case 'identity':
      return <IdentityIcon className="float-left" />;
    case 'modernize':
      return <ModernizeIcon className="float-left" />;

    default:
      return null;
  }
};

export default ExperienceTagIcon;
