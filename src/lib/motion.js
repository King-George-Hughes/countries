const countryVariant = {
  hidden: { opacity: 0, scale: 0.5 },
  show: { opacity: 1, scale: 1 },
};

const countryVariantParent = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { delayChildren: 0.3, staggerChildren: 0.12 },
  },
};

export { countryVariant, countryVariantParent };
