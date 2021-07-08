import { FC } from 'react';

import { TaxonomyEntry } from '../../Taxonomies';
import { stringToColor } from '../../utils';
import './taxonomy-item.styles.scss';

type TaxonomyProps = {
  taxonomyItem: TaxonomyEntry;
  changeSelection: any;
  selectedItem: number;
  isParent: boolean;
};

const TaxonomyItem: FC<TaxonomyProps> = ({
  taxonomyItem,
  changeSelection,
  selectedItem,
  isParent,
}) => {
  return (
    <div className="child-container">
      <div
        className={`item-container ${
          selectedItem === taxonomyItem.classId ? 'selected' : ''
        }`}
        onClick={() => changeSelection(taxonomyItem.classId)}
      >
        {!isParent ? (
          <span
            className="item-rectangle"
            style={{ backgroundColor: stringToColor(taxonomyItem.name) }}
          ></span>
        ) : null}
        <p className={`item-text ${isParent ? 'item-text-bold' : ''}`}>
          {taxonomyItem.name}
        </p>
      </div>

      {taxonomyItem.children.length > 0 ? (
        <div>
          {taxonomyItem.children.map((taxChildItem) => (
            <TaxonomyItem
              key={taxChildItem.classId}
              taxonomyItem={taxChildItem}
              changeSelection={changeSelection}
              selectedItem={selectedItem}
              isParent={false}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default TaxonomyItem;
