/**
 * Generated Tool: pagesTool_0437
 * Domain: Pages
 * ID: 0437
 */
exports.pagesTool_0437 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0437:', error);
    throw error;
  }
};
