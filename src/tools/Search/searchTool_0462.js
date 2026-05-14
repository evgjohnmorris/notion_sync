/**
 * Generated Tool: searchTool_0462
 * Domain: Search
 * ID: 0462
 */
exports.searchTool_0462 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0462:', error);
    throw error;
  }
};
