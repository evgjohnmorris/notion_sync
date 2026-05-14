/**
 * Generated Tool: pagesTool_0412
 * Domain: Pages
 * ID: 0412
 */
exports.pagesTool_0412 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0412:', error);
    throw error;
  }
};
