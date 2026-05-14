/**
 * Generated Tool: pagesTool_0304
 * Domain: Pages
 * ID: 0304
 */
exports.pagesTool_0304 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0304:', error);
    throw error;
  }
};
