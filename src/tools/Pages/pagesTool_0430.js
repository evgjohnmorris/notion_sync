/**
 * Generated Tool: pagesTool_0430
 * Domain: Pages
 * ID: 0430
 */
exports.pagesTool_0430 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0430:', error);
    throw error;
  }
};
