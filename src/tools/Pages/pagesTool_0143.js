/**
 * Generated Tool: pagesTool_0143
 * Domain: Pages
 * ID: 0143
 */
exports.pagesTool_0143 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0143:', error);
    throw error;
  }
};
