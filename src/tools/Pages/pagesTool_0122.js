/**
 * Generated Tool: pagesTool_0122
 * Domain: Pages
 * ID: 0122
 */
exports.pagesTool_0122 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0122:', error);
    throw error;
  }
};
