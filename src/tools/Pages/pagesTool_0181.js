/**
 * Generated Tool: pagesTool_0181
 * Domain: Pages
 * ID: 0181
 */
exports.pagesTool_0181 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0181:', error);
    throw error;
  }
};
