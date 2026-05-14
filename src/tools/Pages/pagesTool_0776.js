/**
 * Generated Tool: pagesTool_0776
 * Domain: Pages
 * ID: 0776
 */
exports.pagesTool_0776 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0776:', error);
    throw error;
  }
};
