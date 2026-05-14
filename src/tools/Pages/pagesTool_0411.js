/**
 * Generated Tool: pagesTool_0411
 * Domain: Pages
 * ID: 0411
 */
exports.pagesTool_0411 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0411:', error);
    throw error;
  }
};
