/**
 * Generated Tool: pagesTool_0883
 * Domain: Pages
 * ID: 0883
 */
exports.pagesTool_0883 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0883:', error);
    throw error;
  }
};
