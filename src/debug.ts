import debug from 'debug';

import flattenInfo from './flatten-info';

export default (appKey: string, fileInfo: string[]) => {
  const key = flattenInfo(fileInfo);
  return debug(`${appKey}:${key}`);
};
