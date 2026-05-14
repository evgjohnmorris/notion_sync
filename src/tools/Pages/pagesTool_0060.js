/**
 * Generated Tool: pagesTool_0060
 * Domain: Pages
 * ID: 0060
 */
exports.pagesTool_0060 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0060:', error);
    throw error;
  }
};
