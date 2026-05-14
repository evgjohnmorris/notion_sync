/**
 * Generated Tool: searchTool_0592
 * Domain: Search
 * ID: 0592
 */
exports.searchTool_0592 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0592:', error);
    throw error;
  }
};
