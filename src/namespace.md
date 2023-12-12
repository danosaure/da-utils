# namespace(key, path)

Generates a namespaced key that can be used for action. The following structure would return namespaces as:

    APP-KEY.COMPONENT1.SUBCOMPONENT1

src/namespace.ts

    import { namespace } from '@danosaure/da-utils';
    export default (path: string): string => namespace('APP-KEY', path);

src/components/namespace.ts

    export { default as namespace } from '../namespace';

src/components/component1/namespace.ts

    import namespace from '../namespace';
    export default (path: string): string => namespace(`Component1.${path}`);

src/components/component1/components/namespace.ts

    export { default as namespace } from '../namespace';

src/components/component1/components/sub-componnent1/namespace.ts

    import namespace from '../namespace';
    export default (path: string): string => namespace(`SubComponent1.${path}`);
