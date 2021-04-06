import React from 'react';
import styles from './Taxonomy.module.scss';
import { stringToColor } from '../utils';
import classnames from 'classnames';

/**
 * Typescript interface for a single Taxonomy entry
 */
export interface TaxonomyEntry {
  name: string;
  children: TaxonomyEntry[];
  classId: number;
}

/**
 * Typescript interface for taxonmoy props
 */
interface TaxonomyProps {
  selected: string;
  taxonomy: TaxonomyEntry[];
}

/**
 * Typecript interface for taxonomy list props
 */
interface TaxonomyItemProps {
  selected: boolean;
  itemName: string;
  depth: number;
}

/**
 * @component
 *
 * #########################
 *
 * TODO: Render a single taxonomy item with the styles shown to you.
 *
 * #########################
 */
export const TaxonomyItem: React.FC<TaxonomyItemProps> = (props) => {
  return <> </>;
};

/**
 * @component
 *
 * Taxonomy list component
 */
const Taxonomy: React.FC<TaxonomyProps> = (props) => {
  const { selected, taxonomy } = props;

  /**
   *
   * #########################
   *
   * TODO: Write a recursive function to traverse the Taxonomy list and render
   * the list as per the design shown to you.
   *
   * #########################
   */
  const recurseTax = (
    taxonomy: TaxonomyEntry[],
    depth: number
  ): React.ReactNode => {
    return <> </>;
  };

  return (
    <div className={styles['container']}>
      <div className={styles['tax-root']}> {taxonomy[0]['name']} </div>
      <ul className={styles['tax-list']}>
        {recurseTax(taxonomy[0]['children'], 1)}
      </ul>
    </div>
  );
};

export default Taxonomy;
