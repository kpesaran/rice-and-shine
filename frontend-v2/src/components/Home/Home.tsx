import PgImg from '../PgImg/PgImg';
import img from '/images/another.png';

function Home() {
  return (
    <>
      <PgImg url={img} />
      <div className='content'>
        <h1>A Culinary Journey Awaits at the Boulder Farmers Market!</h1>
        <p>
          Join us every Saturday from 9 am to 2 pm and Wednesday from 4 pm to 8
          pm to delight in our authentic and locally-inspired culinary
          offerings. Our paella is meticulously crafted on 3 ft pans by our
          trained chefs. At Rice & Shine, we invite you to savor the rich
          flavors of our freshly made paellas and refreshing beverages.
        </p>

        <h1>The Secret Behind Our Signature Paellas</h1>
        <p>
          Our pride resides in our signature paellas, a masterpiece crafted with
          a blend of authentic and premium ingredients. We use Valencia rice,
          which is imported from Spain, and also use aromatic saffron, two types
          of paprika, olive oil. We take it a step further by infusing our
          dishes with fresh, local produce like mushrooms, bridging Spain's
          paella tradition with local Colorado agricultural.
        </p>

        <h1>Catering Services Tailored to Your Occasion</h1>
        <p>
          Looking to elevate your next event with a touch of Spanish flair? We
          are delighted to extend our catering services, bringing a unique
          experience for both you and your guests directly to your table.
        </p>
      </div>
    </>
  );
}

export default Home;
