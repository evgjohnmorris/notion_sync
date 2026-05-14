/**
 * Generated Tool: searchTool_0213
 * Domain: Search
 * ID: 0213
 */
exports.searchTool_0213 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0213:', error);
    throw error;
  }
};
