/**
 * Generated Tool: pagesTool_0046
 * Domain: Pages
 * ID: 0046
 */
exports.pagesTool_0046 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0046:', error);
    throw error;
  }
};
