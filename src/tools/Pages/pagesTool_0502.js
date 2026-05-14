/**
 * Generated Tool: pagesTool_0502
 * Domain: Pages
 * ID: 0502
 */
exports.pagesTool_0502 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0502:', error);
    throw error;
  }
};
