/**
 * Generated Tool: pagesTool_0944
 * Domain: Pages
 * ID: 0944
 */
exports.pagesTool_0944 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0944:', error);
    throw error;
  }
};
