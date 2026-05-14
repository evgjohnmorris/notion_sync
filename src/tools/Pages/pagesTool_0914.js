/**
 * Generated Tool: pagesTool_0914
 * Domain: Pages
 * ID: 0914
 */
exports.pagesTool_0914 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0914:', error);
    throw error;
  }
};
