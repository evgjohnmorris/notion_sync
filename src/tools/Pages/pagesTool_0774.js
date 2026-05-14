/**
 * Generated Tool: pagesTool_0774
 * Domain: Pages
 * ID: 0774
 */
exports.pagesTool_0774 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0774:', error);
    throw error;
  }
};
