/**
 * Generated Tool: searchTool_0212
 * Domain: Search
 * ID: 0212
 */
exports.searchTool_0212 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0212:', error);
    throw error;
  }
};
