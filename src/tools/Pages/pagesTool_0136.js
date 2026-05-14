/**
 * Generated Tool: pagesTool_0136
 * Domain: Pages
 * ID: 0136
 */
exports.pagesTool_0136 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0136:', error);
    throw error;
  }
};
