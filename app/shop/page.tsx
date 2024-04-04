import { shop } from '../../public/shop/shop';
import Shoecard from '../../components/card/Shoecard';

export default function Shop() {
  return (
    <div className="bg-white text-dark min-h-screen p-6 sm:pr-0 sm:flex sm:flex-wrap sm:justify-center">
      {shop.map((shoe) => (
        <Shoecard
          key={shoe.id}
          id={shoe.uid}
          title={shoe.title}
          image={shoe.image}
          price={shoe.price}
        />
      ))}
    </div>
  );
}
