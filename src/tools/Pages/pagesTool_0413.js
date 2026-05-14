/**
 * Generated Tool: pagesTool_0413
 * Domain: Pages
 * ID: 0413
 */
exports.pagesTool_0413 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0413:', error);
    throw error;
  }
};
