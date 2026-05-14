/**
 * Generated Tool: pagesTool_0171
 * Domain: Pages
 * ID: 0171
 */
exports.pagesTool_0171 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0171:', error);
    throw error;
  }
};
