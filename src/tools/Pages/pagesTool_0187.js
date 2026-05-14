/**
 * Generated Tool: pagesTool_0187
 * Domain: Pages
 * ID: 0187
 */
exports.pagesTool_0187 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0187:', error);
    throw error;
  }
};
