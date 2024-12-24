const PIXEL_SIZE = 10;
const pixels = new Array(13500).fill(false);

function Home() {
  
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(150, ${PIXEL_SIZE}px)` }}>
      {pixels.map((pixel, index) => (
        <div
          key={index}
          style={{
            width: PIXEL_SIZE,
            height: PIXEL_SIZE,
            backgroundColor: pixel ? 'blue' : 'lightgray', 
            border: '1px solid #ddd',
            cursor: 'pointer',
          }}
        />
      ))}
    </div>
  );
}

export default Home;