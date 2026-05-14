/**
 * Generated Tool: pagesTool_0179
 * Domain: Pages
 * ID: 0179
 */
exports.pagesTool_0179 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0179:', error);
    throw error;
  }
};
