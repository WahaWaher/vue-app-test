export default (ms, data) =>
  new Promise(rs => {
    setTimeout(() => rs(data), ms);
  });
