/**
 * Generated Tool: pagesTool_0225
 * Domain: Pages
 * ID: 0225
 */
exports.pagesTool_0225 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0225:', error);
    throw error;
  }
};
