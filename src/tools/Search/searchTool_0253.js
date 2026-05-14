/**
 * Generated Tool: searchTool_0253
 * Domain: Search
 * ID: 0253
 */
exports.searchTool_0253 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0253:', error);
    throw error;
  }
};
