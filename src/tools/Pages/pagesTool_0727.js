/**
 * Generated Tool: pagesTool_0727
 * Domain: Pages
 * ID: 0727
 */
exports.pagesTool_0727 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0727:', error);
    throw error;
  }
};
