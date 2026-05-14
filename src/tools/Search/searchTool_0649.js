/**
 * Generated Tool: searchTool_0649
 * Domain: Search
 * ID: 0649
 */
exports.searchTool_0649 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0649:', error);
    throw error;
  }
};
