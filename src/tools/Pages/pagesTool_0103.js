/**
 * Generated Tool: pagesTool_0103
 * Domain: Pages
 * ID: 0103
 */
exports.pagesTool_0103 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0103:', error);
    throw error;
  }
};
