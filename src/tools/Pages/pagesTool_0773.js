/**
 * Generated Tool: pagesTool_0773
 * Domain: Pages
 * ID: 0773
 */
exports.pagesTool_0773 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0773:', error);
    throw error;
  }
};
