/**
 * Generated Tool: searchTool_0183
 * Domain: Search
 * ID: 0183
 */
exports.searchTool_0183 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0183:', error);
    throw error;
  }
};
