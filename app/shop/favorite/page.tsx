import Favcard from '../../../components/card/Favcard';
import { sql } from '@vercel/postgres';

export default async function Favorite() {
  const favorites = await sql`SELECT * FROM favorite`;
  const favorite = favorites.rows;

  console.log(favorite);

  return (
    <div className="bg-white text-dark min-h-screen p-6 sm:pr-0 sm:flex sm:flex-wrap sm:justify-center">
      {favorite.length >= 1 ? (
        <div>
          {favorite?.map((item) => (
            <Favcard
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      ) : (
        <div>
          <a
            href="/shop"
            className="px-6 py-2 bg-brick border border-brick text-white rounded-full"
          >
            {`Favorite is empty`}
          </a>
        </div>
      )}
    </div>
  );
}
