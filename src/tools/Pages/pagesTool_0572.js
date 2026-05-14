/**
 * Generated Tool: pagesTool_0572
 * Domain: Pages
 * ID: 0572
 */
exports.pagesTool_0572 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0572:', error);
    throw error;
  }
};
