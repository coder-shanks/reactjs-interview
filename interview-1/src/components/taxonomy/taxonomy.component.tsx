import { FC, useState } from 'react';

import { TaxonomyEntry } from '../../Taxonomies';
import TaxonomyItem from '../taxonomy-item/taxonomy-item.component';
import './taxonomy.styles.scss';

type TaxonomyEntryProps = {
  taxonomyEntries: TaxonomyEntry[];
};

const Taxonomy: FC<TaxonomyEntryProps> = ({ taxonomyEntries }) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="main-container">
      {taxonomyEntries.map((taxonomyEntry) => (
        <TaxonomyItem
          key={taxonomyEntry.classId}
          taxonomyItem={taxonomyEntry}
          changeSelection={(index: number) => setSelected(index)}
          selectedItem={selected}
        />
      ))}
    </div>
  );
};

export default Taxonomy;
