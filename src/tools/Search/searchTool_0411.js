/**
 * Generated Tool: searchTool_0411
 * Domain: Search
 * ID: 0411
 */
exports.searchTool_0411 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0411:', error);
    throw error;
  }
};
