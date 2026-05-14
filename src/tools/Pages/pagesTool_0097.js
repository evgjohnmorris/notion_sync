/**
 * Generated Tool: pagesTool_0097
 * Domain: Pages
 * ID: 0097
 */
exports.pagesTool_0097 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0097:', error);
    throw error;
  }
};
