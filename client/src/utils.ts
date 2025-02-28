export const waitMs = (timeout: number): Promise<void> => {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve();
    }, timeout);
  });
};
// Přijímá timeout – počet milisekund, které chceme čekat.
//     Vrací Promise<void> – to znamená, že po uplynutí času resolve() nevrátí žádnou hodnotu (void).
//     Používá window.setTimeout, aby zavolal resolve() po uplynutí zadaného timeout.
