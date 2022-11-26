#!/usr/bin/env node

import { buildIcons } from '../../.build/build-icons.mjs'

const componentTemplate = ({
  name,
  namePascal,
  children
}) => `\
import createSolidComponent from '../createSolidComponent'

const ${namePascal} = createSolidComponent('${name}', ${JSON.stringify(children)});

export default ${namePascal}`;

const indexItemTemplate = ({
  name,
  namePascal
}) => `export { default as ${namePascal} } from './icons/${name}';`

const typeDefinitionsTemplate = () => `/// <reference types="solid-js" />
import { JSX } from 'solid-js'
interface TablerIconsProps extends Partial<JSX.IntrinsicElements & JSX.SvgSVGAttributes<SVGSVGElement>> {
  key?: string | number;
  ref?: string | ((component: any) => any);
  color?: string
  size?: string | number
  strokeWidth?: string | number
  class?: string
}
// Generated icons`

const indexTypeTemplate = ({
  namePascal
}) => `export declare const ${namePascal}: (props: TablerIconsProps) => JSX.Element;`


buildIcons({
  name: 'icons-solidjs',
  componentTemplate,
  indexItemTemplate,
  typeDefinitionsTemplate,
  indexTypeTemplate,
  key: false
})
