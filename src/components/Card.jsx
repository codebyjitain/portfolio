const Card = ({ item }) => {
  return (
    <div className="glass rounded-2xl p-5 flex flex-col gap-4 transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_25px_rgba(0,255,136,0.1)] group">
      <img
        src={item.image}
        alt={item.title}
        className="h-12 w-auto object-contain transition-transform group-hover:scale-110"
      />
      <h2 className="text-sm font-bold text-white">{item.title}</h2>
      <p className="text-xs text-[var(--color-3)] leading-relaxed">{item.description}</p>
    </div>
  );
};

export default Card;
