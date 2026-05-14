/**
 * Generated Tool: pagesTool_0386
 * Domain: Pages
 * ID: 0386
 */
exports.pagesTool_0386 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0386:', error);
    throw error;
  }
};
