import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import api from "api";

import { Menu } from "shared/components/ui";
import { MenuType } from "shared/types";

export const Root = () => {
  const [menuList, setMenuList] = useState<MenuType | null>(null);

  const fetchMenuData = async () => {
    try {
      const { data } = await api.services.menu.getItems();
      setMenuList(data);
    } catch(e) {
      console.log(e);
      
    }
  }

  useEffect(() => {
    fetchMenuData()
  }, [])

  console.log(menuList);

  return (
    <div>Cool page</div>
  )

  /* if(!menuList) return null;

  return (
    <Routes>
      {menuList.menuItems.data.map(item => <Route key={`page-route${item.id}`} path={item.attributes.url} element={<Menu data={menuList} />} />)}
    </Routes>
  ) */
}
