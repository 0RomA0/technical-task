import { useState } from 'react';
import styles from './SidebarMenu.module.css';

interface MenuItem {
  title: string;
  children?: MenuItem[];
}

interface SidebarMenuProps {
  isOpen: boolean;
  menuItems: MenuItem[];
}

export default function SidebarMenu({ isOpen, menuItems }: SidebarMenuProps) {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [openMenu, setOpenMenu] = useState(true);

  const handleToggle = (title: string) => {
    setOpenItem(openItem === title ? null : title);
  };

  const onClose = () => {
    setOpenMenu(false);
  };

  return (
    <>
      {openMenu && <div className={styles.overlay} onClick={onClose}></div>}

      {openMenu && (
        <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
          <ul className={styles.menu}>
            {menuItems.map((item) => (
              <li key={item.title}>
                <button
                  className={styles.menuItem}
                  onClick={() => handleToggle(item.title)}
                >
                  {item.title}
                </button>

                {item.children && openItem === item.title && (
                  <ul className={styles.submenu}>
                    {item.children.map((child) => (
                      <li key={child.title}>
                        <button className={styles.submenuItem}>
                          {child.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
