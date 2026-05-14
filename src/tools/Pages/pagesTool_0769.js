/**
 * Generated Tool: pagesTool_0769
 * Domain: Pages
 * ID: 0769
 */
exports.pagesTool_0769 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0769:', error);
    throw error;
  }
};
