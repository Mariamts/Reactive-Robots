export const fetchResources = async (credentials) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_AUTH_URL}/resources?per_page=15`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(credentials),
      }
    );
    return await response.json();
  } catch (error) {
    console.error('[login] error');
    console.trace(error);
  }
  return undefined;
};
