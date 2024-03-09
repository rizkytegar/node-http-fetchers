  
async function getResponses(urls) {
  const responses = [];
  for (const url of urls) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const responseData = {
        url: url,
        statusCode: response.status,
        statusText: response.statusText,
      };
      responses.push(responseData);
    } catch (error) {
      const errorData = {
        url: url,
        error: error.message,
      };
      responses.push(errorData);
    }
  }
  console.log('Responses:');
  console.table(responses);
}

module.exports = getResponses; 
