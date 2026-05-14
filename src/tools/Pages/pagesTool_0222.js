/**
 * Generated Tool: pagesTool_0222
 * Domain: Pages
 * ID: 0222
 */
exports.pagesTool_0222 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0222:', error);
    throw error;
  }
};
