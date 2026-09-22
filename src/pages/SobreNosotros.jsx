import { negocio } from '../config'

export default function SobreNosotros() {
  return (
    <div>
      <section className="grain-charcoal py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <h1 className="font-display text-cream text-4xl md:text-5xl mb-4">Sobre Nosotros</h1>
          <p className="text-cream/75 text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt magni id perspiciatis esse ex, fuga eum? Inventore, obcaecati. Optio possimus sed molestiae nihil, doloremque aliquam repellendus dolorem suscipit blanditiis?
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24 flex flex-col gap-10">
        <div>
          <h2 className="font-display text-2xl md:text-3xl mb-3">Cómo empezamos</h2>
          <p className="text-charcoal/75 leading-relaxed">
            {negocio.nombre} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi harum, est vitae quisquam deserunt sit, qui eaque nobis, reiciendis dicta ratione nisi quae iste? Odio illum maiores odit itaque. Accusantium!
          </p>
        </div>
        <div>
          <h2 className="font-display text-2xl md:text-3xl mb-3">Cómo cocinamos</h2>
          <p className="text-charcoal/75 leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, repellendus. Mollitia labore, expedita magni nam tempora iste in eveniet. Ipsum voluptate id, culpa doloribus beatae iusto in nesciunt earum quia!
          </p>
        </div>
        <div>
          <h2 className="font-display text-2xl md:text-3xl mb-3">Dónde encontrarnos</h2>
          <p className="text-charcoal/75 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum minima repudiandae nisi? Itaque enim praesentium iusto accusamus ipsa eligendi dicta, facilis deserunt rem, at velit fuga esse optio distinctio commodi.
          </p>
        </div>
      </section>
    </div>
  )
}
