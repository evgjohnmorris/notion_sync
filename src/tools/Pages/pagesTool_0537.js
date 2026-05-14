/**
 * Generated Tool: pagesTool_0537
 * Domain: Pages
 * ID: 0537
 */
exports.pagesTool_0537 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0537:', error);
    throw error;
  }
};
