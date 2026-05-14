/**
 * Generated Tool: pagesTool_0903
 * Domain: Pages
 * ID: 0903
 */
exports.pagesTool_0903 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0903:', error);
    throw error;
  }
};
