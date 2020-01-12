const minCapitalChars = (cnt = 1) => v => {
  let caps = v.match(/[A-Z]/g) || [];

  return caps.length >= cnt;
};

const minSpecialChars = (cnt = 1) => v => {
  let specs = v.match(/[$&+,:;=?@#|'<>.^*()%!-]/g) || [];

  return specs.length >= cnt;
};

export { minCapitalChars, minSpecialChars };
