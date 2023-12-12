export default (key: string, path: string): string =>
  `${key || ''}.${path || ''}`.replace(/@/g, '').replace(/[/_]/g, '-').toUpperCase();
