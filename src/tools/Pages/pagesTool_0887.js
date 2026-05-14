/**
 * Generated Tool: pagesTool_0887
 * Domain: Pages
 * ID: 0887
 */
exports.pagesTool_0887 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0887:', error);
    throw error;
  }
};
