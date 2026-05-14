/**
 * Generated Tool: pagesTool_0144
 * Domain: Pages
 * ID: 0144
 */
exports.pagesTool_0144 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0144:', error);
    throw error;
  }
};
