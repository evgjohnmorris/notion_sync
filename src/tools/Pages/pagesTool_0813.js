/**
 * Generated Tool: pagesTool_0813
 * Domain: Pages
 * ID: 0813
 */
exports.pagesTool_0813 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0813:', error);
    throw error;
  }
};
