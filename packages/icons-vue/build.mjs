#!/usr/bin/env node

import { buildIcons } from '../../.build/build-icons.mjs'

const componentTemplate = ({
  name,
  namePascal,
  children
}) => `\
import { ${namePascal} as _Icon } from '@tabler/icons';
import createVueComponent from '../createVueComponent';
export default createVueComponent(_Icon.name, _Icon.node);`;

const indexItemTemplate = ({
  name,
  namePascal
}) => `export { default as ${namePascal} } from './icons/${name}';`

const typeDefinitionsTemplate = () => `import { SVGAttributes, FunctionalComponent } from 'vue';
declare module '@tabler/icons-vue'

// Create interface extending SVGAttributes
export interface SVGProps extends Partial<SVGAttributes> {
  size?: 24 | number
}

// Generated icons`

const indexTypeTemplate = ({
  namePascal
}) => `export declare const ${namePascal}: (props: SVGProps) => FunctionalComponent<SVGProps>;`


buildIcons({
  name: 'icons-vue',
  componentTemplate,
  indexItemTemplate,
  typeDefinitionsTemplate,
  indexTypeTemplate
})
