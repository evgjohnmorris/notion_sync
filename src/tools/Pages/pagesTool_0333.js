/**
 * Generated Tool: pagesTool_0333
 * Domain: Pages
 * ID: 0333
 */
exports.pagesTool_0333 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0333:', error);
    throw error;
  }
};
