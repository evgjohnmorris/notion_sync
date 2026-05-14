/**
 * Generated Tool: pagesTool_0260
 * Domain: Pages
 * ID: 0260
 */
exports.pagesTool_0260 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0260:', error);
    throw error;
  }
};
