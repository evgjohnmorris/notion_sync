/**
 * Generated Tool: pagesTool_0898
 * Domain: Pages
 * ID: 0898
 */
exports.pagesTool_0898 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0898:', error);
    throw error;
  }
};
