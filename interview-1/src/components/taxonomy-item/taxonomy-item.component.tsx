import { FC } from 'react';

import { TaxonomyEntry } from '../../Taxonomies';
import { stringToColor } from '../../utils';
import './taxonomy-item.styles.scss';

type TaxonomyProps = {
  taxonomyItem: TaxonomyEntry;
  changeSelection: any;
  selectedItem: number;
  depth?: number;
};

const TaxonomyItem: FC<TaxonomyProps> = ({
  taxonomyItem,
  changeSelection,
  selectedItem,
  depth = 0,
}) => {
  const renderItemContent = () => (
    <>
      {!(depth === 0) ? (
        <span
          className="item-rectangle"
          style={{ backgroundColor: stringToColor(taxonomyItem.name) }}
        ></span>
      ) : null}
      <p className={`item-text ${depth === 0 ? 'item-text-bold' : ''}`}>
        {taxonomyItem.name}
      </p>
    </>
  );

  const renderChildrenContent = () =>
    taxonomyItem.children.length > 0 ? (
      <div>
        {taxonomyItem.children.map((taxChildItem) => (
          <TaxonomyItem
            key={taxChildItem.classId}
            taxonomyItem={taxChildItem}
            changeSelection={changeSelection}
            selectedItem={selectedItem}
            depth={depth + 10}
          />
        ))}
      </div>
    ) : null;

  return (
    <div className="child-container">
      <div
        className={`item-container ${
          selectedItem === taxonomyItem.classId ? 'selected' : ''
        }`}
        style={{ paddingLeft: `${depth}px` }}
        onClick={() => changeSelection(taxonomyItem.classId)}
      >
        {renderItemContent()}
      </div>
      {renderChildrenContent()}
    </div>
  );
};

export default TaxonomyItem;
