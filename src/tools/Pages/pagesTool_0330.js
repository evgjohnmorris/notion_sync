/**
 * Generated Tool: pagesTool_0330
 * Domain: Pages
 * ID: 0330
 */
exports.pagesTool_0330 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0330:', error);
    throw error;
  }
};
