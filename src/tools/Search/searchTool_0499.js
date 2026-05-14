/**
 * Generated Tool: searchTool_0499
 * Domain: Search
 * ID: 0499
 */
exports.searchTool_0499 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0499:', error);
    throw error;
  }
};
