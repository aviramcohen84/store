import React, { useContext } from 'react';
import { StoreContext } from '../store/store-context';
import { filters } from '../utils';

export default function Filters() {
  const [state, dispatch] = useContext(StoreContext);

  const fakeLoading = () => {
    dispatch({ type: 'setLoading', payload: true});

    setTimeout(() => dispatch({ type: 'setLoading', payload: false}), 300);
  }

  const handleFilterChange = (id, filterBy) => {
    fakeLoading();

    if (state.filters.some(f => f.id === id)) return dispatch({ type: 'removeFilter', payload: id });

    const filterByGroup = filters.find(f => f.filterBy === filterBy);
    const filterByRules = filterByGroup.filters.find(f => f.id === id);

    dispatch({ type: 'addFilter', payload: { id, filterBy, higher: filterByRules.higher, lower: filterByRules.lower }});
  }

  return (
    <div className="fiilters-container">
      <div className="section-content">
        <h4>filter by</h4>
        <div className="filters-content">
          { filters.map((group) => {
            return (
              <div className="filter-item">
                <div className="filter-name">{ group.filterBy }</div>
                <div className="filter-rules">
                  { group.filters.map((filter) => {
                    return (
                      <div className="filter-rule">
                        <div className="filter-checkbox">
                          <input
                            type="checkbox"
                            onChange={ () => handleFilterChange(filter.id, group.filterBy) }
                            checked={ state.filters.some(f => f.id === filter.id) } />
                        </div>
                        <div>{ filter.text }</div>
                      </div>
                    );
                  }) }
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
