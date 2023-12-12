import path from 'path';

export default (info: Array<string>): string => path.join(...info.map((item) => path.basename(item)));
