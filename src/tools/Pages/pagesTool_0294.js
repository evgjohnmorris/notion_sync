/**
 * Generated Tool: pagesTool_0294
 * Domain: Pages
 * ID: 0294
 */
exports.pagesTool_0294 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0294:', error);
    throw error;
  }
};
