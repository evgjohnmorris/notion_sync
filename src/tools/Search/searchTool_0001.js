/**
 * Generated Tool: searchTool_0001
 * Domain: Search
 * ID: 0001
 */
exports.searchTool_0001 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0001:', error);
    throw error;
  }
};
