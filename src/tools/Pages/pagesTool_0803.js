/**
 * Generated Tool: pagesTool_0803
 * Domain: Pages
 * ID: 0803
 */
exports.pagesTool_0803 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0803:', error);
    throw error;
  }
};
