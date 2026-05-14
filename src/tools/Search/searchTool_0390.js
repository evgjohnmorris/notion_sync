/**
 * Generated Tool: searchTool_0390
 * Domain: Search
 * ID: 0390
 */
exports.searchTool_0390 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0390:', error);
    throw error;
  }
};
