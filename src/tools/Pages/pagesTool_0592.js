/**
 * Generated Tool: pagesTool_0592
 * Domain: Pages
 * ID: 0592
 */
exports.pagesTool_0592 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0592:', error);
    throw error;
  }
};
