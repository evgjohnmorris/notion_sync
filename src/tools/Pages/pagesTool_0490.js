/**
 * Generated Tool: pagesTool_0490
 * Domain: Pages
 * ID: 0490
 */
exports.pagesTool_0490 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0490:', error);
    throw error;
  }
};
