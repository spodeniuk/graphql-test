import clsx from 'clsx';
import { Link } from 'react-router-dom'

import { MenuType } from "shared/types";

import styles from './Menu.module.scss';

type MenuProps = {
  data: MenuType | null;
}

export const Menu:React.FC<MenuProps> = ({ data }) => {
  const isUrlVisible = (url: string) => !(url === window.location.pathname || `/${url}` === window.location.pathname);

  if(!data) return null; 

  return (
    <nav className={styles.root}>
      <ul>
        {data.menuItems.data.map(({ attributes, id }) => (
          <li 
            style={{ height: attributes.title.length > 12 ? 104: 52 }}
            className={clsx({ [styles['is-hidden']]: !isUrlVisible(attributes.url) })}
            key={`menu-item-${id}`}
          >
            <Link to={attributes.url}>{attributes.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}