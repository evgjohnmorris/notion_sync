/**
 * Generated Tool: searchTool_0591
 * Domain: Search
 * ID: 0591
 */
exports.searchTool_0591 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0591:', error);
    throw error;
  }
};
