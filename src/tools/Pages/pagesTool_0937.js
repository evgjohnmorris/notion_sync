/**
 * Generated Tool: pagesTool_0937
 * Domain: Pages
 * ID: 0937
 */
exports.pagesTool_0937 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0937:', error);
    throw error;
  }
};
