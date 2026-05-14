/**
 * Generated Tool: searchTool_0985
 * Domain: Search
 * ID: 0985
 */
exports.searchTool_0985 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0985:', error);
    throw error;
  }
};
