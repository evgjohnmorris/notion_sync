/**
 * Generated Tool: searchTool_0339
 * Domain: Search
 * ID: 0339
 */
exports.searchTool_0339 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0339:', error);
    throw error;
  }
};
