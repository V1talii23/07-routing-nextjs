import React from 'react';
import css from './layout.module.css';

interface FilteredLayoutProps {
  children: React.ReactElement;
  sidebar: React.ReactElement;
}

function FilteredLayout({ children, sidebar }: FilteredLayoutProps) {
  return (
    <section className={css.container}>
      <div className={css.sidebar}>{sidebar}</div>
      <div className={css.notesWrapper}>{children}</div>
    </section>
  );
}

export default FilteredLayout;
