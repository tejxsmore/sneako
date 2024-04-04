import { sql } from '@vercel/postgres';
import Bagcard from '../../../components/card/Bagcard';

export default async function Bag() {
  const bagItems = await sql`SELECT * FROM bag`;
  const bag = bagItems.rows;

  return (
    <div className="p-6 bg-white text-dark">
      <div></div>
      <div className="flex flex-col space-y-6">
        {bag.map((item) => (
          <Bagcard
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}
