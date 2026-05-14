/**
 * Generated Tool: searchTool_0109
 * Domain: Search
 * ID: 0109
 */
exports.searchTool_0109 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0109:', error);
    throw error;
  }
};
