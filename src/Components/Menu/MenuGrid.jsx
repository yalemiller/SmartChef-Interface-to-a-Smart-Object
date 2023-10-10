function MenuGrid({ children }) {

/*
Menu Grid
Grid used to display the menu card items
*/

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    maxWidth: '100%',
    margin: '0 auto',
    padding: '20px',
    overflowX: 'scroll',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    flexWrap: 'wrap',
  };

  return <div style={gridStyle}>{children}</div>;
}

export default MenuGrid;
