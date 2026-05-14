/**
 * Generated Tool: searchTool_0821
 * Domain: Search
 * ID: 0821
 */
exports.searchTool_0821 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0821:', error);
    throw error;
  }
};
