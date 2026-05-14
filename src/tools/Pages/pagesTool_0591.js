/**
 * Generated Tool: pagesTool_0591
 * Domain: Pages
 * ID: 0591
 */
exports.pagesTool_0591 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0591:', error);
    throw error;
  }
};
