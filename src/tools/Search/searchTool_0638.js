/**
 * Generated Tool: searchTool_0638
 * Domain: Search
 * ID: 0638
 */
exports.searchTool_0638 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0638:', error);
    throw error;
  }
};
