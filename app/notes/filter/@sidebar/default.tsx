// import { getNotes } from '@/lib/api';
import css from './SidebarNotes.module.css';

const tags = ['Work', 'Personal', 'Meeting', 'Shopping', 'Todo'];

async function Sidebar() {
  return (
    <ul className={css.menuList}>
      <li className={css.menuItem}>
        <a href={`/notes/filter/all`} className={css.menuLink}>
          All notes
        </a>
      </li>

      {tags.map((tag) => (
        <li key={tags.indexOf(tag)} className={css.menuItem}>
          <a href={`/notes/filter/${tag}`} className={css.menuLink}>
            {tag}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Sidebar;
