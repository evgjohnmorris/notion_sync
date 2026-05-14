/**
 * Generated Tool: searchTool_0164
 * Domain: Search
 * ID: 0164
 */
exports.searchTool_0164 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0164:', error);
    throw error;
  }
};
