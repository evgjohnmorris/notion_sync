/**
 * Generated Tool: pagesTool_0221
 * Domain: Pages
 * ID: 0221
 */
exports.pagesTool_0221 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0221:', error);
    throw error;
  }
};
