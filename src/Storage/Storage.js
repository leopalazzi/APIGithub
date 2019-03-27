const DEFAULT_NAMESPACE = "preferences";

export const setValue = (key, value, namespace = DEFAULT_NAMESPACE) => {
  const serializedValue = JSON.stringify(value);
  sessionStorage.setItem(`${namespace}:${key}`, serializedValue);
};

export const getValue = (key, namespace = DEFAULT_NAMESPACE) => {
  const value = sessionStorage.getItem(`${namespace}:${key}`);
  return !!value ? JSON.parse(value) : null;
};
