import SectionSeperator from 'src/components/home/section-seperator'

const About = () => {
  return (
    <div className="px-4 py-6">
      <SectionSeperator title="About Us" description="" />
      <div className="prose prose-lg mx-auto ">
        <h2 className="text-2xl font-bold text-red-400">Celebrating 40 Years of Timeless Elegance</h2>
        <p>
          At MN Jewel Park, we believe that jewelry is more than just an ornament—it’s a reflection of tradition, love,
          and craftsmanship. Established in 1984, we have been a trusted name in Vellore for 40 years, offering
          exquisite, handcrafted jewelry that blends heritage with modern elegance.
        </p>
        <h3 className="text-xl font-semibold">Our Legacy</h3>
        <p>
          With four decades of expertise, MN Jewel Park has built a reputation for quality, trust, and customization.
          Every piece of jewelry we craft tells a story, making your special moments even more memorable. Whether it’s a
          wedding, anniversary, or a personal milestone, we are here to create designs that capture your emotions.
        </p>
        <h3 className="text-xl font-semibold">Why Choose Us?</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>Unmatched Craftsmanship</strong> – Our artisans bring designs to life with intricate detailing and
            precision.
          </li>
          <li>
            <strong>Personalized Jewelry</strong> – We specialize in custom-made jewelry, turning your unique ideas into
            reality.
          </li>
          <li>
            <strong>Gold Exchange with No Extra Charges</strong> – Upgrade your jewelry without additional wastage or
            making fees.
          </li>
          <li>
            <strong>Transparent Pricing & Purity</strong> – We ensure fair pricing and authentic certification for every
            piece.
          </li>
        </ul>
        <h3 className="text-xl font-semibold">Our Collections</h3>
        <p>
          From traditional South Indian gold jewelry to contemporary diamond and gemstone pieces, we offer a diverse
          range of collections that cater to every taste and occasion. Whether you seek temple jewelry, antique designs,
          or modern minimalistic styles, MN Jewel Park has something special for you.
        </p>
        <h3 className="text-xl font-semibold">A Promise of Excellence</h3>
        <p>
          As we step into our 40th year, we express our heartfelt gratitude to our customers who have been a part of our
          journey. Your trust and love inspire us to continue delivering excellence, innovation, and timeless beauty in
          every piece we create.
        </p>
      </div>
    </div>
  )
}

export default About
