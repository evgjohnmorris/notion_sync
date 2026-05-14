/**
 * Generated Tool: pagesTool_0821
 * Domain: Pages
 * ID: 0821
 */
exports.pagesTool_0821 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0821:', error);
    throw error;
  }
};
