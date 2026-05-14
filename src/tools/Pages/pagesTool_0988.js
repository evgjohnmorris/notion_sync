/**
 * Generated Tool: pagesTool_0988
 * Domain: Pages
 * ID: 0988
 */
exports.pagesTool_0988 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0988:', error);
    throw error;
  }
};
