import React from 'react';
import './App.css';
const Filter = ({ filterTitle, filterRating, onFilterChange }) => {
    return (
        <div className="input-wrapper">
            <input
                type="text"
                placeholder="Filter by Title"
                value={filterTitle}
                onChange={(e) => onFilterChange('title', e.target.value)}
            />
            <input
                type="number"
                placeholder="Filter by Rating"
                value={filterRating}
                onChange={(e) => onFilterChange('rating', e.target.value)}
            />
        </div>
    );
};

export default Filter;
