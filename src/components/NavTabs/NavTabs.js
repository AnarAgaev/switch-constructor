const NavTabs = () => {
  return(
    <ul className="constructor__tabs">
      <li className="active">Рамки</li>
      <li>Механизмы</li>
      <li>Фон</li>
      <li id="constructorCompositionsTub" style={{display: 'none'}}>Идеальные сочетания</li>
    </ul>
  );
}

export default NavTabs;