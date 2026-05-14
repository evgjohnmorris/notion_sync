/**
 * Generated Tool: pagesTool_0777
 * Domain: Pages
 * ID: 0777
 */
exports.pagesTool_0777 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0777:', error);
    throw error;
  }
};
