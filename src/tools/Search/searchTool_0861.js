/**
 * Generated Tool: searchTool_0861
 * Domain: Search
 * ID: 0861
 */
exports.searchTool_0861 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0861:', error);
    throw error;
  }
};
