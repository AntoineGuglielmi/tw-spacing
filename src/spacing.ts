/**
 * Spacing props
 * @typedef {Object} SpacingProps
 */
export type SpacingProps = {
    baseCoeff: `var(--${string})`|number
    baseValue: string
    baseName?: string
    defaultSpacings?: Record<string, string>
    spacingNames?: Array<string>
}

/**
 * Default spacing names
 * @type {Array<string>}
 */
const defaultSpacingNames = [
    'sm-3',
    'sm-2',
    'sm-1',
    'base',
    'lg-1',
    'lg-2',
    'lg-3',
    'lg-4',
    'lg-5',
    'lg-6',
    'lg-7',
    'lg-8',
    'lg-9',
    'lg-10',
    'lg-11',
]

/**
 * Generate a spacing scale based on a base value and coefficient
 * @param baseName - The name of the base spacing value
 * @param baseValue - The value of the base spacing
 * @param baseCoeff - The coefficient to scale the spacing
 * @param defaultSpacings - The default spacing values
 * @param spacingNames - The names of the spacing values
 * @returns The spacing scale
 */
export const spacing = ({
    baseCoeff,
    baseName = 'base',
    baseValue,
    defaultSpacings = {
      none: '0',
      full: '100%',
    },
    spacingNames = defaultSpacingNames,
  }: SpacingProps): Record<string, string> => {
    const baseIndex = spacingNames.indexOf(baseName);
    return spacingNames.reduce((finalSpace, spaceName, index) => {
      return {
        ...finalSpace,
        [spaceName]: `calc(${baseValue} * pow(${baseCoeff},${index - baseIndex}))`,
      };
    }, defaultSpacings);
  };