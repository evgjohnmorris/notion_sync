/**
 * Generated Tool: pagesTool_0784
 * Domain: Pages
 * ID: 0784
 */
exports.pagesTool_0784 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0784:', error);
    throw error;
  }
};
