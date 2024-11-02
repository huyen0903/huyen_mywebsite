import { DISHES } from "../constants";
import ArtCard from "./ArtCard";
const Arts = () => {
  return (
    <section className="container mx-auto py-16" id="arts">
      <h2 className="mb-8 text-center text-3xl tracking-tighter lg:text-5xl font-medium">
        My Art Gallery
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {DISHES.map((project, index) => (
          <ArtCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Arts;
