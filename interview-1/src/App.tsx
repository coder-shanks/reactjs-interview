/**
 * @file
 * Main app component that renders the Taxonomy component
 */

import styles from './App.module.scss';
import { flatTaxonomy, nestedTaxonomy } from './Taxonomies';
import Taxonomy, { TaxonomyItem } from './Taxonomy';

/**
 * @component
 */
function App() {
  return (
    <div className={styles['app']}>
      {/* Taxonomy entry component */}
      <h2> Single taxonomy entry component</h2>
      <div className={styles['taxonomy-entries']}>
        <div className={styles['taxonomy-entries__container']}>
          <TaxonomyItem itemName="Taxonomy item" depth={0} selected={false} />
        </div>

        <div className={styles['taxonomy-entries__container']}>
          <TaxonomyItem
            itemName="Taxonomy item selected"
            depth={0}
            selected={true}
          />
        </div>
      </div>

      {/* Taxonomy List component */}
      <h2> Full taxonomy list component </h2>
      <div className={styles['taxonomies']}>
        <Taxonomy selected={'sedan'} taxonomy={nestedTaxonomy} />
        <Taxonomy selected={'glass'} taxonomy={flatTaxonomy} />
      </div>
    </div>
  );
}

export default App;
