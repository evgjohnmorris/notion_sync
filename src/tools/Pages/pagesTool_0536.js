/**
 * Generated Tool: pagesTool_0536
 * Domain: Pages
 * ID: 0536
 */
exports.pagesTool_0536 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0536:', error);
    throw error;
  }
};
