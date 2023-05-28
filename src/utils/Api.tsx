export async function fetchCharacters(
  page: number,
  nameFilter: string,
  statusFilter: string,
  genderFilter: string
) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}&name=${nameFilter}&status=${statusFilter}&gender=${genderFilter}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was an error fetching characters: ", error);
    return { info: null, results: [] }; // Returning a structure similar to the successful API response, but empty
  }
}
