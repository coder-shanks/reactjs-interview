/**
 * @component
 */

import { flatTaxonomy, nestedTaxonomy } from './Taxonomies';

import './App.scss';
import Taxonomy from './components/taxonomy/taxonomy.component';

function App() {
  return (
    <div className="app-container">
      {<Taxonomy taxonomyEntries={nestedTaxonomy} />}
      {<Taxonomy taxonomyEntries={flatTaxonomy} />}
    </div>
  );
}

export default App;
