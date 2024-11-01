import { DependencyList, EffectCallback, useEffect, useLayoutEffect, useRef } from "react";

export const useNotFirstEffect = (effect: EffectCallback, deps: DependencyList) => {
  const effectRef = useRef(effect);
  const depsRef = useRef(deps);
  const isFirstEffect = useRef(true);

  effectRef.current = effect;
  depsRef.current = deps;

  useEffect(() => {
    if (isFirstEffect.current) {
      return;
    }
    isFirstEffect.current = false;
    return effectRef.current();
  }, depsRef.current);
};

export const useNotFirstLayoutEffect = (effect: EffectCallback, deps: DependencyList) => {
  const effectRef = useRef(effect);
  const depsRef = useRef(deps);
  const isFirstEffect = useRef(true);

  effectRef.current = effect;
  depsRef.current = deps;

  useLayoutEffect(() => {
    if (isFirstEffect.current) {
      return;
    }
    isFirstEffect.current = false;
    return effectRef.current();
  }, depsRef.current);
};
