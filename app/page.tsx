import {connectDB} from '@/utils/database'
const PIXEL_SIZE = 10;
const pixels = new Array(13500).fill(false);

async function Home() {
  const client = await connectDB;
  const result = await client.db('pixel').collection('data').find().toArray();
  return (
    <div style={{ position: 'relative',display: 'grid', gridTemplateColumns: `repeat(150, ${PIXEL_SIZE}px)`}}>
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
      {result.map((data, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: data.starty*PIXEL_SIZE,
            left: data.startx*PIXEL_SIZE,
            width: (data.endx-data.startx+1)*PIXEL_SIZE,
            height: (data.endy-data.starty+1)*PIXEL_SIZE,
            backgroundColor: 'blue',
            border: '1px solid #ddd',
            
          }}
        />
      ))}
    </div>
  );
}

export default Home;