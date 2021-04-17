const URL = 'http://localhost:8000';

export async function getParentThemes() {
  const response = await fetch(`${URL}/parent/theme`);
  const data = await response.json()['results'];
    console.log(data);
  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch quotes.');
  }

//   const transformedthemes = [];

//   for (const key in data) {
//     const quoteObj = {
//       id: key,
//       ...data[key],
//     };

//     transformedQuotes.push(quoteObj);
//   }

  return data;
}