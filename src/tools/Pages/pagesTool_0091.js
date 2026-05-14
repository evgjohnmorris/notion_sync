/**
 * Generated Tool: pagesTool_0091
 * Domain: Pages
 * ID: 0091
 */
exports.pagesTool_0091 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0091:', error);
    throw error;
  }
};
