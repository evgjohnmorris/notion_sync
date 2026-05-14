/**
 * Generated Tool: pagesTool_0193
 * Domain: Pages
 * ID: 0193
 */
exports.pagesTool_0193 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0193:', error);
    throw error;
  }
};
