/**
 * Generated Tool: pagesTool_0082
 * Domain: Pages
 * ID: 0082
 */
exports.pagesTool_0082 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0082:', error);
    throw error;
  }
};
