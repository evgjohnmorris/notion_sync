/**
 * Generated Tool: pagesTool_0277
 * Domain: Pages
 * ID: 0277
 */
exports.pagesTool_0277 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0277:', error);
    throw error;
  }
};
