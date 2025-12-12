import React from 'react';
import css from './layout.module.css';

interface FilteredNotesNotes {
  children: React.ReactElement;
  sidebar: React.ReactElement;
}

function FilteredNotes({ children, sidebar }: FilteredNotesNotes) {
  return (
    <div className={css.container}>
      <div className={css.sidebar}>{sidebar}</div>
      <div className={css.notesWrapper}>{children}</div>
    </div>
  );
}

export default FilteredNotes;
