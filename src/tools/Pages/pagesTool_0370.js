/**
 * Generated Tool: pagesTool_0370
 * Domain: Pages
 * ID: 0370
 */
exports.pagesTool_0370 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0370:', error);
    throw error;
  }
};
