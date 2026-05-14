/**
 * Generated Tool: searchTool_0910
 * Domain: Search
 * ID: 0910
 */
exports.searchTool_0910 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0910:', error);
    throw error;
  }
};
