/**
 * Generated Tool: searchTool_0870
 * Domain: Search
 * ID: 0870
 */
exports.searchTool_0870 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0870:', error);
    throw error;
  }
};
