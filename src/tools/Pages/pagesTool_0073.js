/**
 * Generated Tool: pagesTool_0073
 * Domain: Pages
 * ID: 0073
 */
exports.pagesTool_0073 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0073:', error);
    throw error;
  }
};
