function urlify(url) {
  const punctuation = /[\.,?!']/g;
  return url.trim().replaceAll(/\s/g, '-').replace(punctuation, '').toLowerCase();
}


console.log(urlify("https:/aABb's cd.com"));