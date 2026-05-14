/**
 * Generated Tool: pagesTool_0363
 * Domain: Pages
 * ID: 0363
 */
exports.pagesTool_0363 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0363:', error);
    throw error;
  }
};
