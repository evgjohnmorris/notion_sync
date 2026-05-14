/**
 * Generated Tool: searchTool_0220
 * Domain: Search
 * ID: 0220
 */
exports.searchTool_0220 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0220:', error);
    throw error;
  }
};
