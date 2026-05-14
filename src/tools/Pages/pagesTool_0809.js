/**
 * Generated Tool: pagesTool_0809
 * Domain: Pages
 * ID: 0809
 */
exports.pagesTool_0809 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0809:', error);
    throw error;
  }
};
