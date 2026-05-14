/**
 * Generated Tool: searchTool_0912
 * Domain: Search
 * ID: 0912
 */
exports.searchTool_0912 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0912:', error);
    throw error;
  }
};
