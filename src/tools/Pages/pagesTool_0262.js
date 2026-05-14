/**
 * Generated Tool: pagesTool_0262
 * Domain: Pages
 * ID: 0262
 */
exports.pagesTool_0262 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0262:', error);
    throw error;
  }
};
