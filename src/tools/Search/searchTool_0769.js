/**
 * Generated Tool: searchTool_0769
 * Domain: Search
 * ID: 0769
 */
exports.searchTool_0769 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0769:', error);
    throw error;
  }
};
