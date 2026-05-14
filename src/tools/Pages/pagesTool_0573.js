/**
 * Generated Tool: pagesTool_0573
 * Domain: Pages
 * ID: 0573
 */
exports.pagesTool_0573 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0573:', error);
    throw error;
  }
};
