import flattenInfo from './flatten-info';

export default (filename: string | string[]) => flattenInfo(['src'].concat(filename));
