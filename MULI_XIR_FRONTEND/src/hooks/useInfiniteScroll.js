import { useRef, useCallback } from 'react';

/**
 * Un hook personalizado para implementar scroll infinito.
 * @param {function} callback - La función que se llamará para cargar más datos.
 * @param {boolean} hasMore - Un booleano que indica si hay más datos por cargar.
 * @returns Un ref para ser asignado al elemento "loader" al final de la lista.
 */
export const useInfiniteScroll = (callback, hasMore) => {
  // Usamos useRef para mantener una referencia al observer entre renders.
  const observer = useRef();

  // useCallback nos da una función de ref estable que no cambia en cada render,
  // a menos que sus dependencias (callback, hasMore) cambien.
  const loaderRef = useCallback(node => {
    // Si ya hay un observer, lo desconectamos para evitar fugas de memoria.
    if (observer.current) observer.current.disconnect();

    // Creamos una nueva instancia del IntersectionObserver.
    observer.current = new IntersectionObserver(entries => {
      // Si el elemento es visible (intersecting) y hay más datos por cargar,
      // llamamos a la función de callback.
      if (entries[0].isIntersecting && hasMore) {
        callback();
      }
    });

    // Si el nodo (el elemento loader) existe, lo observamos.
    if (node) observer.current.observe(node);
  }, [callback, hasMore]);

  return loaderRef;
};