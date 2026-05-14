/**
 * Generated Tool: pagesTool_0148
 * Domain: Pages
 * ID: 0148
 */
exports.pagesTool_0148 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0148:', error);
    throw error;
  }
};
