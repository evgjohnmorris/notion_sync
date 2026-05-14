/**
 * Generated Tool: pagesTool_0814
 * Domain: Pages
 * ID: 0814
 */
exports.pagesTool_0814 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0814:', error);
    throw error;
  }
};
