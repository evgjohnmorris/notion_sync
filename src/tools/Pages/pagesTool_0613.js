/**
 * Generated Tool: pagesTool_0613
 * Domain: Pages
 * ID: 0613
 */
exports.pagesTool_0613 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0613:', error);
    throw error;
  }
};
