/**
 * Generated Tool: searchTool_0063
 * Domain: Search
 * ID: 0063
 */
exports.searchTool_0063 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0063:', error);
    throw error;
  }
};
