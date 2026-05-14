/**
 * Generated Tool: searchTool_0160
 * Domain: Search
 * ID: 0160
 */
exports.searchTool_0160 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0160:', error);
    throw error;
  }
};
