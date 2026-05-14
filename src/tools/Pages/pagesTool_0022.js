/**
 * Generated Tool: pagesTool_0022
 * Domain: Pages
 * ID: 0022
 */
exports.pagesTool_0022 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0022:', error);
    throw error;
  }
};
