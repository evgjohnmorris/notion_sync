/**
 * Generated Tool: pagesTool_0380
 * Domain: Pages
 * ID: 0380
 */
exports.pagesTool_0380 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0380:', error);
    throw error;
  }
};
