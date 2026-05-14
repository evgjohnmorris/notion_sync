/**
 * Generated Tool: searchTool_0423
 * Domain: Search
 * ID: 0423
 */
exports.searchTool_0423 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0423:', error);
    throw error;
  }
};
