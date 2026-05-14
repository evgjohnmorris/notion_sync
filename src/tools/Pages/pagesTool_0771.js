/**
 * Generated Tool: pagesTool_0771
 * Domain: Pages
 * ID: 0771
 */
exports.pagesTool_0771 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0771:', error);
    throw error;
  }
};
