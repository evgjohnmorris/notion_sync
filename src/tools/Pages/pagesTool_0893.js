/**
 * Generated Tool: pagesTool_0893
 * Domain: Pages
 * ID: 0893
 */
exports.pagesTool_0893 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0893:', error);
    throw error;
  }
};
